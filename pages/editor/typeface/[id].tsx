import { LayoutMain } from "components/Layout";
import { AxiosConfig } from "libs/api/axios-config";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { PayloadFont } from "@ponpub/font";
import { CSSProperties } from "react";
import NextLink from "next/link";

interface ServerProps {
    id: string;
    font: PayloadFont;
}

type BaseProps = InferGetServerSidePropsType<typeof getServerSideProps>;
interface PageProps extends BaseProps {
    fonts: Array<PayloadFont>;
}

interface HeaderLink {
    label: string;
    href: string;
    asPath: string;
}

const FONT_URI = "/api/v1/post/font";

const waterFall = [16, 20, 24, 30, 36, 48, 56, 72, 80, 96, 100];

export default function Page(props: PageProps) {
    const { font } = props;
    const { typefaces } = font;
    const headerLinks: Array<HeaderLink> = [
        {
            label: "Data",
            href: "/editor/typeface/[id]",
            asPath: `/editor/typeface/${font.id}?step=1`,
        },
        {
            label: "Pricing",
            href: "/editor/typeface/[id]",
            asPath: `/editor/typeface/${font.id}?step=2`,
        },
    ];

    return (
        <>
            <LayoutMain
                title={`${font.family} ${
                    font.subFamily && `- ${font.subFamily}`
                }`}
            >
                <header
                    style={{
                        position: "sticky",
                        top: "calc(var(--grid-gap) * 2)",
                        zIndex: 1000,
                        display: "flex",
                        gap: "calc(var(--grid-gap) / 2)",
                        marginBottom: "calc(var(--grid-gap) / 2)",
                    }}
                >
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            gap: "calc(var(--grid-gap) / 2)",
                        }}
                    >
                        {headerLinks.map((item, i) => (
                            <li key={i}>
                                <NextLink href={item.href} as={item.asPath}>
                                    <a
                                        style={{
                                            border: "1px solid",
                                            height: "calc(var(--grid-gap) * 4)",
                                            boxShadow:
                                                "0 0 0.45em -0.05em var(--shadow-color)",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            padding: "0 var(--grid-gap)",
                                            backgroundColor: "var(--accents-1)",
                                            fontFeatureSettings: `"ss01", "ss04", "tnum"`,
                                        }}
                                    >
                                        <span>{item.label}</span>
                                    </a>
                                </NextLink>
                            </li>
                        ))}
                    </ul>
                </header>

                <ul
                    style={{
                        listStyle: "none",
                        padding: "calc(var(--grid-gap) * 2) 0",
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(var(--grid-gap) / 2)",
                        width: "100%",
                    }}
                >
                    {typefaces.map((item, i) => {
                        const divStyle: CSSProperties = {
                            border: "1px solid",
                            boxShadow: "0 0 0.45em -0.05em var(--shadow-color)",
                            padding: "0 calc(var(--grid-gap) / 1)",
                        };

                        const mergeArray = waterFall.map((source) => {
                            return {
                                size: source,
                                family: item.name.family,
                                fullName: item.name.fullName,
                                fontWeight: item.info.weight,
                                fontStyle:
                                    item.info.style === "italic"
                                        ? "italic"
                                        : "normal",
                            };
                        });

                        return (
                            <li
                                key={i}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "baseline",
                                    gap: "calc(var(--grid-gap) / 2)",
                                    marginBottom:
                                        i < typefaces.length - 1 ? "2em" : 0,
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: `"${item.name.fullName}", var(--font-sans)`,
                                        display: "inline-flex",
                                        border: "1px solid",
                                        padding: "0 calc(var(--grid-gap) / 1)",
                                        boxShadow:
                                            "0 0 0.45em -0.05em var(--shadow-color)",
                                    }}
                                >
                                    <span style={{ fontSize: "2em" }}>
                                        {item.name.fullName}
                                    </span>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "calc(var(--grid-gap) / 2)",
                                        // margin: "0 0 1em 0",
                                        width: "100%",
                                    }}
                                >
                                    {mergeArray.map((arrItem, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                fontFamily: `"${arrItem.fullName}", var(--font-sans)`,
                                                fontWeight: arrItem.fontWeight,
                                                fontStyle: arrItem.fontStyle,
                                                display: "flex",
                                                gap: "calc(var(--grid-gap) / 2)",
                                                width: "100%",
                                            }}
                                        >
                                            <div style={divStyle}>
                                                <span
                                                    style={{
                                                        fontSize: `calc(${arrItem.size}px)`,
                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap",
                                                        textOverflow:
                                                            "ellipsis",
                                                        display: "block",
                                                        maxWidth: "100%",
                                                        // fontFeatureSettings: `"tnum", "case", "onum"`,
                                                    }}
                                                >
                                                    {arrItem.size}px
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    ...divStyle,
                                                    overflow: "hidden",
                                                    whiteSpace: "nowrap",
                                                    textOverflow: "ellipsis",
                                                    display: "block",
                                                    maxWidth: "100%",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: `calc(${arrItem.size}px)`,
                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap",
                                                        textOverflow:
                                                            "ellipsis",
                                                        display: "block",
                                                        maxWidth: "100%",
                                                    }}
                                                >
                                                    {arrItem.fullName}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </LayoutMain>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<ServerProps> = async (
    ctx
) => {
    const { params } = ctx;
    const fontID = params.id as string;
    const font = await AxiosConfig(ctx.req).get<PayloadFont>(
        `${FONT_URI}/${fontID}`
    );
    return { props: { id: fontID, font: font.data } };
};
