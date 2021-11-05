import type { CSSProperties } from "react";
import type { BaseTypeface } from "@ponpub/font";

export const generateFontStyle = (font: BaseTypeface) => {
    const {
        info: { weight, style },
        name: { fullName },
        variable,
    } = font;

    const baseStyle: CSSProperties = {
        fontFamily: `${fullName}, var(--font-sans)`,
        fontStyle: style === "italic" ? "italic" : "normal",
        fontWeight: weight,
    };

    if (!variable) return baseStyle;
    if (variable.axes.length === 0) return baseStyle;
    const reduce = variable.axes.reduce(
        (p, c) => ({ ...p, [c.tag]: c.value }),
        {}
    );
    const stringify = JSON.stringify(reduce).replace(/[{}:]/g, " ");
    return {
        fontFamily: baseStyle.fontFamily,
        fontStyle: baseStyle.fontStyle,
        fontVariationSettings: stringify,
    };
};
