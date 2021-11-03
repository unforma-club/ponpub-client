import { Font } from "opentype.js";
import { checkItalic } from "./check-italic";
import { generateMetrics } from "./generate-metrics";

const generateStyle = (font: Font) => {
    const isItalic = checkItalic(font);
    return isItalic ? "italic" : "roman";
};

export const generateInfo = (font: Font) => {
    const names = font.names;

    return {
        copyright: names.copyright ? names.copyright.en : "",
        trademark: names.trademark ? names.trademark.en : "",
        version: names.version ? names.version.en : "",
        designer: {
            value: names.designer ? names.designer.en : "",
            url: names.designerURL ? names.designerURL.en : "",
        },
        license: {
            value: names.license ? names.license.en : "",
            url: names.licenseURL ? names.licenseURL.en : "",
        },
        manufacturer: {
            value: names.manufacturer ? names.manufacturer.en : "",
            url: names.manufacturerURL ? names.manufacturerURL.en : "",
        },
        tables: Object.keys(font.tables),
        style: generateStyle(font),
        weight: font.tables.os2.usWeightClass,
        metrics: generateMetrics(font),
    };
};
