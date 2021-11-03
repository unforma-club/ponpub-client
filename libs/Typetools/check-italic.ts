import type { Font } from "opentype.js";

export const checkItalic = (font: Font) => {
    const isItalic = font.tables.post.italicAngle !== 0;
    return isItalic;
};
