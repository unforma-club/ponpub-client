import type { Font } from "opentype.js";
import { load } from "opentype.js";
import { checkItalic } from "./check-italic";
import { FileOutput } from "./types/file";
import { VariableAxes, VariableInstance } from "./types/typeface";
import VariableTools from "./VariableTools";
import { generateInfo } from "./generate-info";
import { BaseTypeface } from "./types/typeface";
import { sortByNull } from "libs/helpers/sort-by-null";

const generateVariableFont = (font: Font) => {
    const variableFont = new VariableTools(font);
    const axes = variableFont.getAxes();
    const instances = variableFont.getInstances() as Array<any>;
    const newAxes: Array<VariableAxes> = [];

    if (axes) {
        axes.map((item: any) => {
            newAxes.push({
                tag: item.tag,
                name: item.name.en,
                value: item.defaultValue,
                defaultValue: item.defaultValue,
                min: item.minValue,
                max: item.maxValue,
                step: item.maxValue <= 1 && item.maxValue >= -1 ? 0.01 : 1,
            });
        });
    }
    return newAxes.length !== 0
        ? {
              axes: newAxes,
              instances: instances.map((item) => ({
                  coordinates: item.coordinates,
                  name: item.name.en,
              })) as Array<VariableInstance>,
          }
        : null;
};

const generateFontFamily = (font: Font) => {
    // @ts-ignore
    const typefaceFamily = font.names.preferredFamily
        ? // @ts-ignore
          font.names.preferredFamily.en
        : font.names.fontFamily.en;
    return typefaceFamily;
};

const generateFullName = (font: Font) => {
    const fullName = font.names.fullName.en;
    const variable = generateVariableFont(font);
    const italic = checkItalic(font);

    return variable
        ? fullName.includes("Var" || "Variable")
            ? fullName
            : `${fullName} ${
                  italic && !fullName.includes("Italic" || "Ital")
                      ? "Italic Variable"
                      : "Variable"
              }`
        : fullName;
};

const generateShortName = (font: Font) => {
    const fontFamily = generateFontFamily(font);
    const fullName = font.names.fullName.en;
    const afterReplace = fullName.replace(fontFamily, "").replace(/\s/g, "");

    // @ts-ignore
    const shortName = font.names.preferredSubfamily
        ? // @ts-ignore
          font.names.preferredSubfamily.en
        : afterReplace.length !== 0
        ? afterReplace
        : "Regular";

    return shortName;
};

export const readOpentype = async (typefaces: Array<FileOutput>) => {
    const opentype = await Promise.all(
        typefaces.map(async (item) => {
            const font = await load(item.url);
            const fontVariable = generateVariableFont(font);
            const family = generateFontFamily(font);
            const fullName = generateFullName(font);
            const shortName = generateShortName(font);

            const info = generateInfo(font);

            return new Promise<BaseTypeface>((resolve) => {
                resolve({
                    file: { ...item },
                    variable: fontVariable,
                    name: {
                        family,
                        subFamily: "",
                        fullName,
                        shortName,
                    },
                    info,
                });
            });
        })
    );

    const sortedOpentype = opentype
        .sort((a, b) => a.info.weight - b.info.weight)
        .sort((a, b) => sortByNull(a.variable, b.variable))
        .sort((a, b) => {
            if (a.info.style === b.info.style) return 0;
            if (a.info.style === "italic") return 1;
            return -1;
        });

    return sortedOpentype;
};
