import type { CSSProperties } from "react";
import type { PayloadFont } from "@ponpub/font";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import { useRouter } from "next/router";
import NextLink from "next/link";

import { LayoutMain } from "components/Layout";
import { Masonry } from "components/Utils/Masonry";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Page(props: any) {
    const { push } = useRouter();
    const fontURI = "/api/v1/post/font";
    const { mutate } = useSWRConfig();
    const { data } = useSWR<Array<PayloadFont>>(fontURI, fetcher, {
        fallbackData: props.fonts,
    });

    const breakpointColumnsObj = {
        default: 6,
        1920: 5,
        1600: 4,
        1366: 3,
        960: 2,
        780: 1,
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

    if (!data)
        return (
            <LayoutMain>
                <div className="wip">Loading...</div>
            </LayoutMain>
        );
    if (data.length === 0)
        return (
            <LayoutMain>
                <div className="wip">No data yet</div>
            </LayoutMain>
        );

    return (
        <LayoutMain>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                containerStyle={{ padding: "calc(var(--grid-gap) * 2) 0" }}
            >
                {data
                    // .concat(data)
                    .map((item, i) => {
                        const customFont: CSSProperties = {
                            fontFamily: `${item.default.name.fullName}, var(--font-sans)`,
                            fontStyle:
                                item.default.info.style === "italic"
                                    ? "italic"
                                    : "normal",
                            fontWeight: item.default.info.weight,
                        };
                        return (
                            <li
                                key={i}
                                style={{
                                    position: "relative",
                                    overflow: "hidden",
                                    border: "1px solid",
                                    boxShadow:
                                        "0 0 0.45em -0.05em var(--shadow-color)",
                                    // boxShadow:
                                    //     "0 0 0.5em -0.15em var(--shadow-color)",
                                    // width: "100%",
                                    // backgroundColor: "var(--accents-2)",
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(2, 1fr)",
                                        padding: "var(--grid-gap)",
                                        alignItems: "flex-start",
                                        borderBottomRightRadius: "inherit",
                                        borderBottomLeftRadius: "inherit",
                                        fontFeatureSettings: `"ss01", "ss04"`,
                                        // backgroundColor: "var(--accents-2)",
                                        borderBottom: "1px solid",
                                        // height: "100%",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "block",
                                            width: "100%",
                                            position: "relative",
                                            // lineHeight: 1.1,
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            // ...customFont,
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
                                                fontSize: "0.8em",
                                            }}
                                        >
                                            {item.family}
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
                                            {item.subFamily
                                                ? item.subFamily
                                                : "-"}
                                        </span>
                                    </div>

                                    <div>
                                        <button
                                            onClick={() =>
                                                push(
                                                    `/editor/typeface/[id]`,
                                                    `/editor/typeface/${item.id}`
                                                )
                                            }
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>

                                <NextLink
                                    href="/editor/typeface/[id]"
                                    as={`/editor/typeface/${item.id}`}
                                >
                                    <a
                                        style={{
                                            position: "relative",
                                            boxShadow:
                                                "0 0.35em 0.5em -0.5em var(--shadow-color)",
                                            borderTopRightRadius: "inherit",
                                            borderTopLeftRadius: "inherit",
                                        }}
                                    >
                                        <p
                                            style={{
                                                ...customFont,
                                                fontSize: "2em",
                                                padding:
                                                    "calc(var(--grid-gap) / 2)",
                                                fontFeatureSettings: "initial",
                                                hyphens: "auto",
                                                wordWrap: "break-word",
                                                overflowWrap: "break-word",
                                                margin: 0,
                                            }}
                                        >
                                            {item.sampleText.value}
                                        </p>
                                    </a>
                                </NextLink>
                            </li>
                        );
                    })}
            </Masonry>
        </LayoutMain>
    );
}
