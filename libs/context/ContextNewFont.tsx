import type { FC, Dispatch, SetStateAction } from "react";
import { BaseTypeface } from "@ponpub/font";

import { createContext, useCallback, useContext, useState } from "react";
import axios from "axios";
import nProgress from "nprogress";
import { useRouter } from "next/router";

import { sortByNull } from "libs/helpers/sort-by-null";

import { readInput, readOpentype } from "libs/Typetools";
import { generateFontFace } from "libs/Typetools/generate-fontface";
import { generateSampleText } from "libs/helpers/generate-sample-text";

interface ResponseCSS {
    createdAt: string;
    fileDestination: string;
    fileName: string;
    fileUrl: string;
    id: string;
    updatedAt: string;
}

interface ResponseTypefaces {
    destination: string;
    encoding: string;
    fieldname: string;
    filename: string;
    mimetype: string;
    originalname: string;
    path: string;
    size: number;
}

interface ResponseTypefacesDB extends BaseTypeface {
    id: string;
    createdAt: string;
    updatedAt: string;
}

interface ContextNewFontAttr {
    files: Array<File>;
    setFiles: Dispatch<SetStateAction<Array<File>>>;
    typefaces: BaseTypeface[];
    setTypefaces: Dispatch<SetStateAction<BaseTypeface[]>>;
    addTypefaces: (fileList: FileList) => Promise<void>;
    handleSubmit: () => void;
}

const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const initState: ContextNewFontAttr = {
    files: [],
    setFiles: () => ({}),
    typefaces: [],
    setTypefaces: () => ({}),
    addTypefaces: (_: FileList) => new Promise(() => ({})),
    handleSubmit: () => ({}),
};

const ContextNewFont = createContext<ContextNewFontAttr>(initState);
export const ConsumerNewFont = ContextNewFont.Consumer;
export const useNewFont = () => useContext(ContextNewFont);

const updateTypefaceURL = (
    typefaces: Array<BaseTypeface>,
    uploadedTypefaces: Array<ResponseTypefaces>
) => {
    return typefaces.map((source) => {
        const target = uploadedTypefaces.find(
            (item) => item.filename === source.file.name
        );

        const newTypeface: BaseTypeface = {
            ...source,
            file: {
                ...source.file,
                url: `${API_VERSION}/${target.path}`,
                destination: `${target.destination}/${target.filename}`,
            },
        };

        return target ? newTypeface : source;
    });
};

const handleUploadTypefaces = async (
    files: Array<File>,
    fontFamily: string,
    fontSubFamily: string,
    fileType: string
) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("font_files", file, file.name));
    let url: string = "";
    if (fontSubFamily) {
        url = `/api/v1/content/typeface/${fontFamily}/${fontSubFamily}/${fileType}`;
    } else {
        url = `/api/v1/content/typeface/${fontFamily}/${fileType}`;
    }

    const postTypefaces = await axios.post(url.replace(/\s/g, "-"), formData);

    return postTypefaces.data;
};

const handleUploadCSS = async (typefaces: {
    fileName: string;
    apiVersion: string;
    fontFaces: string;
}) => {
    let url: string = `/api/v1/content/css`;

    const postCSS = await axios.post<ResponseCSS>(
        url.replace(/\s/g, "-"),
        typefaces
    );
    return postCSS.data;
};

export const ProviderFontInput: FC = ({ children }) => {
    const { push } = useRouter();
    /**
     * This state will be send to service as array of files
     */
    const [files, setFiles] = useState<Array<File>>([]);
    const [typefaces, setTypefaces] = useState<Array<BaseTypeface>>([]);

    const addTypefaces = async (fileList: FileList) => {
        nProgress.start();

        const arrFiles = Array.from(fileList);
        const outFiles = await readInput(arrFiles);
        const opentype = await readOpentype(outFiles);
        const installed = await generateFontFace(opentype);

        setFiles(arrFiles);
        setTypefaces(installed);

        nProgress.done();
    };

    const handleSubmit = useCallback(async () => {
        if (typefaces.length === 0) return;
        nProgress.start();

        const uploadedTypefaces = await handleUploadTypefaces(
            files,
            typefaces[0].name.family,
            typefaces[0].name.subFamily,
            typefaces[0].file.type.split("/").pop() // Transform string from i.e. `font/ttf` => `ttf` itself
        );

        const updatedTypefacesURL = updateTypefaceURL(
            typefaces,
            uploadedTypefaces
        );

        const cssFileName = updatedTypefacesURL[0].name.subFamily
            ? typefaces[0].name.subFamily
            : typefaces[0].name.family;

        const fontFaces = updatedTypefacesURL
            .sort((a, b) => sortByNull(a.variable, b.variable))
            .map((item) => {
                let newString: string = "";
                const { file, info, name, variable } = item;
                const { fullName } = name;
                const { url } = file;
                const { style, weight } = info;

                const newTypefaceStyle =
                    style === "italic" ? "italic" : "normal";

                /**
                 * Remove `font-weight` if file is variable font
                 */
                if (!variable) {
                    newString = `@font-face {\n\tfont-family: "${fullName}";\n\tfont-style: ${newTypefaceStyle};\n\tfont-weight: ${weight};\n\tfont-display: block;\n\tsrc: url("${url}");\n}\n`;
                } else {
                    newString = `@font-face {\n\tfont-family: "${fullName}";\n\tfont-style: ${newTypefaceStyle};\n\tfont-display: block;\n\tsrc: url("${url}");\n}\n`;
                }

                return newString;
            });

        const transformStyleSheet = {
            fileName: cssFileName.replace(/\s/g, "-"),
            apiVersion: API_VERSION,
            fontFaces: fontFaces.join("\n"),
        };

        const uploadedCSS = await handleUploadCSS(transformStyleSheet);

        const dbTypefaces = await axios.post<Array<ResponseTypefacesDB>>(
            "/api/v1/content/typeface",
            updatedTypefacesURL
        );

        const sampleText = generateSampleText();

        const transformFont = {
            family: updatedTypefacesURL[0].name.family,
            subFamily: updatedTypefacesURL[0].name.subFamily,
            stylesheet: uploadedCSS.id,
            typefaces: dbTypefaces.data.map((item) => item.id),
            default: dbTypefaces.data[0].id,
            sampleText: {
                value: sampleText,
            },
            prices: [
                { currency: "USD", priceBase: 100, priceCut: 10 },
                { currency: "IDR", priceBase: 1600000, priceCut: 10 },
            ],
        };

        await axios
            .post<Array<any>>("/api/v1/post/font", transformFont)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));

        push("/post/typeface", "/post/typeface?view=grid&publish=true");
    }, [typefaces, files]);

    return (
        <ContextNewFont.Provider
            value={{
                files,
                setFiles,
                typefaces,
                setTypefaces,
                addTypefaces,
                handleSubmit,
            }}
        >
            {children}
        </ContextNewFont.Provider>
    );
};
