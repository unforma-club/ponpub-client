import { Font } from "opentype.js";

export const generateMetrics = (font: Font) => {
    const typefaceMetrics = {
        unitsPerEm: font.unitsPerEm,
        usWinAscent: font.tables.os2.usWinAscent,
        usWinDescent: font.tables.os2.usWinDescent,
        sTypoAscender: font.tables.os2.sTypoAscender,
        sTypoDescender: font.tables.os2.sTypoDescender,
        descender: font.tables.hhea.descender,
        ascender: font.tables.hhea.ascender,
        xHeight: font.tables.os2.sxHeight,
        capHeight: font.tables.os2.sCapHeight,
        baseLine: 0,
        xMax: font.tables.head.xMax,
        xMin: font.tables.head.xMin,
        yMax: font.tables.head.yMax,
        yMin: font.tables.head.yMin,
    };
    return typefaceMetrics;
};
