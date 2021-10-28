import nProgress from "nprogress";
import { FC, Dispatch, SetStateAction, useCallback } from "react";
import { createContext, useContext, useState } from "react";
import {
    BaseTypeface,
    FileReaderOutput,
    readInputFile,
    Typetools,
} from "libs/Typetools";
import { sortByNull } from "libs/helpers/sort-by-null";
import axios from "axios";
import { useRouter } from "next/router";

interface ContextFontInputAttr {
    files: Array<File>;
    setFiles: Dispatch<SetStateAction<Array<File>>>;
    typefaces: BaseTypeface[];
    setTypefaces: Dispatch<SetStateAction<BaseTypeface[]>>;
    addTypefaces: (fileList: FileList) => Promise<void>;
    handleSubmit: () => void;
}

const initState: ContextFontInputAttr = {
    files: [],
    setFiles: () => ({}),
    typefaces: [],
    setTypefaces: () => ({}),
    addTypefaces: (_: FileList) => new Promise(() => ({})),
    handleSubmit: () => ({}),
};

const ContextFontInput = createContext<ContextFontInputAttr>(initState);
export const ConsumerFontInput = ContextFontInput.Consumer;
export const useFontInput = () => useContext(ContextFontInput);

const readOpentype = async (typefaces: Array<FileReaderOutput>) => {
    const tt = new Typetools();
    const ot = await tt.generateOpenType(typefaces);

    /**
     * Sorting by `weight` and `italic` value
     */
    const sortedOpentype = ot
        .sort((a, b) => a.typefaceWeight - b.typefaceWeight)
        .sort((a, b) =>
            a.typefaceStyle === b.typefaceStyle
                ? 0
                : a.typefaceStyle === "italic"
                ? 1
                : -1
        )
        .sort((a, b) => sortByNull(a.typefaceVariable, b.typefaceVariable));

    /**
     * Installing font to the DOM
     */
    await tt.generateFontface(sortedOpentype);
    return sortedOpentype;
};

const handleUploadTypefaces = async (
    files: Array<File>,
    fontFamily: string,
    fontSubFamily: string
) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("font_files", file, file.name));
    let url: string = "";
    if (fontSubFamily) {
        url = `/api/v1/asset/typeface/${fontFamily}/${fontSubFamily}`;
    } else {
        url = `/api/v1/asset/typeface/${fontFamily}`;
    }

    const postTypefaces = await axios.post(url.replace(/\s/g, "-"), formData);

    return postTypefaces.data;
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
        const outFiles = await readInputFile(arrFiles);
        const newTypefaces = await readOpentype(outFiles);
        setFiles(arrFiles);
        setTypefaces(newTypefaces);

        nProgress.done();
    };

    const handleSubmit = useCallback(async () => {
        if (typefaces.length === 0) return;
        nProgress.start();

        const subType = typefaces.map((item) => ({
            fileName: item.fileName,
            fileSize: item.fileSize,
        }));

        await handleUploadTypefaces(
            files,
            typefaces[0].typefaceFamily,
            typefaces[0].typefaceSubFamily
        ).then((res) => console.log(res));

        await axios
            .post("/api/v1/post/font", subType)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));

        nProgress.done().remove();
        push("/");
    }, [typefaces, files]);

    return (
        <ContextFontInput.Provider
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
        </ContextFontInput.Provider>
    );
};
