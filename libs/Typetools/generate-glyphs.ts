import { Font } from "opentype.js";
import { generateMetrics } from "./generate-metrics";

export const generateGlyphs = (font: Font) => {
    const initLength = font.glyphs.length;
    const glyphLength = Array(initLength).fill(0);

    const unitsPerEm = font.unitsPerEm;
    const pixelRatio = 1;
    const width = 420;
    const height = width;

    const parentWidth = width / pixelRatio;
    const parentHeight = height / pixelRatio / 1.1;

    const {
        xMax,
        xMin,
        yMax,
        yMin,
        ascender,
        descender,
        baseLine,
        capHeight,
        xHeight,
    } = generateMetrics(font);

    const maxHeight = yMax - yMin;
    const maxWidth = xMax - xMin;
    const glyphScale = Math.min(
        parentWidth / maxWidth,
        parentHeight / maxHeight
    );

    return Promise.all(
        glyphLength.map((_i, i) => {
            const glyph = font.glyphs.get(i);
            const glyphSize = glyphScale * unitsPerEm;
            const glyphBaseline = (parentHeight * yMax) / maxHeight;
            const glyphWidth = glyph.advanceWidth * glyphScale;
            const xmin = (parentWidth - glyphWidth) / 2;
            const ypx = (val: number) => glyphBaseline - val * glyphScale;

            const svg = glyph
                .getPath(xmin, glyphBaseline, glyphSize)
                .toPathData(10);

            const newSVG = {
                ascender: ypx(ascender),
                descender: ypx(descender),
                baseLine: ypx(baseLine),
                capHeight: ypx(capHeight),
                xHeight: ypx(xHeight),
                path: svg,
                viewBox: `0 0 ${width} ${height}`,
                baseHeight: height,
                baseWidth: width,
            };

            const unicode = glyph.unicode;
            const newOBJ = {
                id: glyph.index,
                name: glyph.name,
                unicode: unicode
                    ? `${("0000" + unicode.toString(16)).slice(-4)}`
                    : undefined,
                html: unicode ? `&#${unicode};` : undefined,
                character: unicode ? String.fromCharCode(unicode) : undefined,
                svg: newSVG,
            };
            return new Promise((resolve) => {
                resolve(newOBJ);
            });
        })
    );
};
