import { LayoutMain } from "components/Layout";
import { AxiosConfig } from "libs/api/axios-config";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { BaseTypeface, PayloadFont } from "@ponpub/font";
import { CSSProperties } from "react";
import NextLink from "next/link";
import { handleDeleteFont } from "libs/helpers/handle-delete-font";
import { useRouter } from "next/router";
import { generateFontStyle } from "libs/helpers/generate-font-style";
import { HeaderPage } from "components/Header";

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

interface WaterFall extends BaseTypeface {
    size: number;
}

const FONT_URI = "/api/v1/post/font";

const waterFall = [16, 20, 24, 30, 36, 48, 56, 72, 80, 96, 100];

const boxStyle: CSSProperties = {
    border: "1px solid",
    padding: "0 calc(var(--grid-gap) / 1)",
    boxShadow: "var(--geist-box-shadow)",
    backgroundColor: "var(--accents-1)",
};

export default function Page(props: PageProps) {
    const { push } = useRouter();
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
                <HeaderPage>
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
                                            display: "inline-flex",
                                            alignItems: "center",
                                            fontFeatureSettings: `"ss01", "ss04", "tnum"`,
                                            height: "calc(var(--grid-gap) * 4)",
                                            ...boxStyle,
                                        }}
                                    >
                                        <span>{item.label}</span>
                                    </a>
                                </NextLink>
                            </li>
                        ))}
                        <li>
                            <button
                                style={{
                                    fontSize: "inherit",
                                    fontFamily: "inherit",
                                    height: "calc(var(--grid-gap) * 4)",
                                    cursor: "pointer",
                                    ...boxStyle,
                                }}
                                onClick={() =>
                                    handleDeleteFont({
                                        // @ts-ignore
                                        styleID: font.stylesheet,
                                        typefacesID: font.typefaces.map(
                                            // @ts-ignore
                                            (item) => item.id
                                        ),
                                        fontID: font.id,
                                    }).then(() =>
                                        push("/post/typeface?view=grid")
                                    )
                                }
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </HeaderPage>

                <ul
                    style={{
                        listStyle: "none",
                        padding: "0 0 calc(var(--grid-gap) * 2) 0",
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "calc(var(--grid-gap) / 2)",
                        width: "100%",
                    }}
                >
                    {typefaces.map((item, i) => {
                        const mergeArray: Array<WaterFall> = waterFall.map(
                            (source) => {
                                return {
                                    size: source,
                                    ...item,
                                };
                            }
                        );

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
                                        display: "inline-flex",
                                        ...boxStyle,
                                        ...generateFontStyle(item),
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
                                    {mergeArray.map(
                                        ({ size, ...arrItem }, i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    display: "flex",
                                                    gap: "calc(var(--grid-gap) / 2)",
                                                    width: "100%",
                                                    ...generateFontStyle(
                                                        arrItem
                                                    ),
                                                }}
                                            >
                                                <div style={boxStyle}>
                                                    <span
                                                        style={{
                                                            fontSize: `calc(${size}px)`,
                                                            overflow: "hidden",
                                                            whiteSpace:
                                                                "nowrap",
                                                            textOverflow:
                                                                "ellipsis",
                                                            display: "block",
                                                            maxWidth: "100%",
                                                            // fontFeatureSettings: `"tnum", "case", "onum"`,
                                                        }}
                                                    >
                                                        {size}px
                                                    </span>
                                                </div>
                                                <div
                                                    style={{
                                                        ...boxStyle,
                                                        overflow: "hidden",
                                                        whiteSpace: "nowrap",
                                                        textOverflow:
                                                            "ellipsis",
                                                        display: "block",
                                                        maxWidth: "100%",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: `calc(${size}px)`,
                                                            overflow: "hidden",
                                                            whiteSpace:
                                                                "nowrap",
                                                            textOverflow:
                                                                "ellipsis",
                                                            display: "block",
                                                            maxWidth: "100%",
                                                        }}
                                                    >
                                                        {arrItem.name.fullName}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    )}
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
