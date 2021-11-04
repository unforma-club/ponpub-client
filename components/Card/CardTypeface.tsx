import type { CSSProperties } from "react";
import type { PayloadFont } from "@ponpub/font";

import axios from "axios";
import NextLink from "next/link";
import { useSWRConfig } from "swr";
import { useRouter } from "next/router";

interface CardTypefaceProps {
    font: PayloadFont;
}

const buttonStyle: CSSProperties = {
    appearance: "none",
    background: "none",
    border: "1px solid",
    // fontSize: "inherit",
    fontFamily: "inherit",
    color: "currentcolor",
};

export const CardTypeface = ({ font }: CardTypefaceProps) => {
    const fontURI = "/api/v1/post/font";
    const { push } = useRouter();
    const { mutate } = useSWRConfig();

    const customFont: CSSProperties = {
        fontFamily: `${font.default.name.fullName}, var(--font-sans)`,
        fontStyle: font.default.info.style === "italic" ? "italic" : "normal",
        fontWeight: font.default.info.weight,
    };
    const handleDelete = async (item: PayloadFont) => {
        await axios
            // @ts-ignore
            .delete(`/api/v1/content/css/${item.stylesheet.id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));

        await axios
            .post(`/api/v1/content/typeface/delete`, item.typefaces)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));

        await axios
            .delete(`/api/v1/post/font/${item.id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));

        await mutate(fontURI);
    };
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

                <div>
                    <button
                        style={{ ...buttonStyle }}
                        onClick={() =>
                            push(
                                `/editor/typeface/[id]`,
                                `/editor/typeface/${font.id}`
                            )
                        }
                    >
                        Edit
                    </button>
                    <button
                        style={{ ...buttonStyle }}
                        onClick={() => handleDelete(font)}
                    >
                        Delete
                    </button>
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
                            ...customFont,
                            fontSize: "1.5em",
                            padding: "calc(var(--grid-gap) / 2)",
                            fontFeatureSettings: "initial",
                            hyphens: "auto",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            margin: 0,
                        }}
                    >
                        {font.sampleText.value}
                    </p>
                </a>
            </NextLink>
        </li>
    );
};
