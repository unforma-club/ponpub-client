import { BaseTypeface } from "./types/typeface";

export const generateFontFace = (typefaces: Array<BaseTypeface>) => {
    return Promise.all(
        typefaces.map(async (typeface) => {
            const newName = typeface.name.fullName;
            const weight = typeface.info.weight.toString();
            const style =
                typeface.info.style === "italic" ? "italic" : "normal";

            const fontFace = new FontFace(
                newName,
                `url("${typeface.file.url}")`,
                { weight, style }
            );

            try {
                await fontFace.load();
                document.fonts.add(fontFace);
                console.log(
                    `%c>>> [new] ${typeface.name.fullName} - [${typeface.info.style}] - [${typeface.info.weight}].`,
                    `color: #ff00ff;`
                );
            } catch (error) {}

            return new Promise<BaseTypeface>((resolve) => resolve(typeface));
        })
    );
};
