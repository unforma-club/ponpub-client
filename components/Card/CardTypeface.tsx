import type { PayloadFont } from "@ponpub/font";
import NextLink from "next/link";
import { generateFontStyle } from "libs/helpers/generate-font-style";

interface CardTypefaceProps {
    font: PayloadFont;
}

export const CardTypeface = ({ font }: CardTypefaceProps) => {
    return (
        <li
            style={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid",
                backgroundColor: "var(--accents-1)",
                filter: "var(--filter-shadow)",
            }}
        >
            <div
                style={{
                    // display: "grid",
                    // gridTemplateColumns: "2fr 1fr",
                    display: "flex",
                    flexDirection: "column",
                    gap: "calc(var(--grid-gap) / 2)",
                    padding: "var(--grid-gap)",
                    alignItems: "flex-start",
                    borderBottomRightRadius: "inherit",
                    borderBottomLeftRadius: "inherit",
                    fontFeatureSettings: `"ss01", "ss04"`,
                    borderBottom: "1px solid",
                }}
            >
                <div
                    style={{
                        display: "block",
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        lineHeight: 1.1,
                    }}
                >
                    <span
                        style={{
                            width: "100%",
                            display: "block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            fontWeight: "bold",
                            fontSize: "1.5em",
                        }}
                    >
                        {font.family}
                    </span>
                    <span
                        style={{
                            width: "100%",
                            display: "block",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            fontSize: "0.8em",
                        }}
                    >
                        {font.subFamily ? font.subFamily : "-"}
                    </span>
                </div>
            </div>

            <NextLink
                href="/editor/typeface/[id]"
                as={`/editor/typeface/${font.id}`}
            >
                <a
                    style={{
                        position: "relative",
                        boxShadow: "0 0.35em 0.5em -0.5em var(--shadow-color)",
                        borderTopRightRadius: "inherit",
                        borderTopLeftRadius: "inherit",
                    }}
                >
                    <p
                        style={{
                            fontSize: "1.5em",
                            padding: "calc(var(--grid-gap) / 2)",
                            fontFeatureSettings: "initial",
                            hyphens: "auto",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            margin: 0,
                            ...generateFontStyle(font.default),
                        }}
                    >
                        {font.sampleText.value}
                    </p>
                </a>
            </NextLink>
        </li>
    );
};
