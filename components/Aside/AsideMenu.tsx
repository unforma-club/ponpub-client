import styles from "./menu.module.scss";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { IconType } from "components/Utils/SVGIcon";
import dummyBlog from "libs/dummyBlog.json";
import dummyGoods from "libs/dummyGoods.json";
import { useFontData } from "libs/context/ContextFontData";

interface Menu {
    label: string;
    href: string;
    asPath: string;
}

interface MenuAction extends Menu {
    icon: IconType;
}

interface MainMenu {
    menu: Menu;
    menuAction?: MenuAction;
    subMenu?: Array<Menu>;
    siblings: Array<string>;
}

// interface SubFontProps {
//     fonts: PayloadFont[];
// }

// const box: CSSProperties = {
//     height: "calc(var(--grid-gap) * 4)",
//     border: "1px solid",
//     padding: "0 calc(var(--grid-gap) * 1)",
// };

// const SubFont = ({ fonts }: SubFontProps) => {
//     const groupFontsByFamily = (fonts: PayloadFont[]) => {
//         const groupByFamily = fonts.reduce((prev, cur) => {
//             const key = cur["family"];
//             if (!prev[key]) {
//                 prev[key] = [];
//             }
//             prev[key].push(cur);
//             return prev;
//         }, []);

//         const grouped = Object.keys(groupByFamily).map((item) => {
//             const newTypefaces = groupByFamily[item].map((s: PayloadFont) => ({
//                 id: s.id,
//                 subFamily: s.subFamily,
//             }));

//             return {
//                 family: item,
//                 typefaces: newTypefaces as Array<{
//                     id: string;
//                     subFamily: string;
//                 }>,
//             };
//         });

//         return grouped;
//     };
//     return (
//         <ul
//             className={styles.sub}
//             style={{
//                 width: "100%",
//                 listStyle: "none",
//                 padding: 0,
//                 margin: 0,
//                 backgroundColor: "black",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "calc(var(--grid-gap) / 2)",
//                 maxWidth: "100%",
//             }}
//         >
//             {groupFontsByFamily(fonts).map((font, i) => (
//                 <li key={i} style={{ maxWidth: "100%" }}>
//                     <ul
//                         style={{
//                             whiteSpace: "nowrap",
//                             display: "flex",
//                             gap: "calc(var(--grid-gap) / 2)",
//                             alignItems: "baseline",
//                             maxWidth: "100%",
//                         }}
//                     >
//                         <li style={{ maxWidth: "100%" }}>
//                             <a href="">
//                                 <span>{font.family}</span>
//                             </a>
//                         </li>

//                         <li style={{ maxWidth: "100%" }}>
//                             <ul
//                                 style={{
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     gap: "calc(var(--grid-gap) / 2)",
//                                     alignItems: "baseline",
//                                     maxWidth: "100%",
//                                 }}
//                             >
//                                 {font.typefaces.map(
//                                     (item, i) =>
//                                         item.subFamily && (
//                                             <li
//                                                 key={i}
//                                                 style={{ maxWidth: "100%" }}
//                                             >
//                                                 <a
//                                                     href=""
//                                                     data-ellipsis={
//                                                         item.subFamily
//                                                     }
//                                                 >
//                                                     <span>
//                                                         {item.subFamily}
//                                                     </span>
//                                                 </a>
//                                             </li>
//                                         )
//                                 )}
//                             </ul>
//                         </li>
//                     </ul>
//                 </li>
//             ))}
//         </ul>
//     );
// };

export const AsideMenu = () => {
    const { pathname, asPath } = useRouter();
    const { fonts } = useFontData();

    const newMenus: Array<MainMenu> = [
        {
            menu: {
                label: "Ponpub",
                href: "/",
                asPath: "/",
            },
            siblings: ["/"],
        },
        {
            menu: {
                label: "Blog",
                href: "/post/blog",
                asPath: "/post/blog",
            },
            menuAction: {
                label: "Add Blog",
                href: "/editor/blog/new",
                asPath: "/editor/blog/new",
                icon: "add",
            },
            siblings: ["/editor/blog/[id]", "/editor/blog/new", "/post/blog"],
            subMenu: dummyBlog.map((item) => ({
                label: item.title,
                href: "/editor/blog/[id]",
                asPath: `/editor/blog/${item.slug}`,
            })),
        },
        {
            menu: {
                label: "Goods",
                href: "/post/goods",
                asPath: "/post/goods",
            },
            menuAction: {
                label: "Add Goods",
                href: "/editor/goods/new",
                asPath: "/editor/goods/new",
                icon: "add",
            },
            siblings: [
                "/editor/goods/[id]",
                "/editor/goods/new",
                "/post/goods",
            ],
            subMenu: dummyGoods.map((item) => ({
                label: item.title,
                href: "/editor/goods/[id]",
                asPath: `/editor/goods/${item.slug}`,
            })),
        },
        {
            menu: {
                label: "Typeface",
                href: "/post/typeface",
                asPath: "/post/typeface",
            },
            menuAction: {
                label: "Add Typeface",
                href: "/editor/typeface/new",
                asPath: "/editor/typeface/new",
                icon: "add",
            },
            siblings: [
                "/editor/typeface/[id]",
                "/editor/typeface/new",
                "/post/typeface",
            ],
            subMenu: fonts
                // .sort((a, b) => {
                //     if (a.family < b.family) return -1;
                //     if (a.family > b.family) return 1;
                //     return 0;
                // })
                .map((item) => ({
                    label: item.subFamily
                        ? `${item.subFamily} ${
                              item.default.variable ? "/ Variable" : ""
                          }`
                        : `${item.family} ${
                              item.default.variable ? "/ Variable" : ""
                          }`,
                    href: "/editor/typeface/[id]",
                    asPath: `/editor/typeface/${item.id}?step=1`,
                })),
        },
    ];

    return (
        <nav>
            <ul className={styles.menu}>
                {newMenus.map((item, pIndex) => (
                    <li key={pIndex} className={styles.list}>
                        <ul className={styles.main}>
                            <li>
                                <NextLink
                                    href={item.menu.href}
                                    as={item.menu.asPath}
                                >
                                    <a
                                        title={item.menu.label}
                                        // style={{
                                        //     backgroundColor: `var(--accents-${
                                        //         pIndex + 2
                                        //     })`,
                                        // }}
                                        data-active={
                                            item.siblings.indexOf(pathname) !==
                                            -1
                                        }
                                    >
                                        <span>{item.menu.label}</span>
                                    </a>
                                </NextLink>
                            </li>

                            {item.menuAction && (
                                <li>
                                    <NextLink
                                        href={item.menuAction.href}
                                        as={item.menuAction.asPath}
                                    >
                                        <a
                                            title={item.menuAction.label}
                                            data-action={true}
                                            data-active={
                                                item.siblings.indexOf(
                                                    pathname
                                                ) !== -1 &&
                                                item.menuAction.href.indexOf(
                                                    pathname
                                                ) !== -1
                                            }
                                        >
                                            <span
                                                data-action={true}
                                                style={{
                                                    fontSize: "1.5em",
                                                    fontWeight: 400,
                                                }}
                                            >
                                                &#43;
                                            </span>
                                        </a>
                                    </NextLink>
                                </li>
                            )}
                        </ul>

                        {/* {item.menu.label === "Typeface" &&
                            fonts.length !== 0 && <SubFont fonts={fonts} />} */}

                        {item.subMenu &&
                            item.siblings.indexOf(pathname) !== -1 && (
                                <ul
                                    className={styles.sub}
                                    data-scrollbar="hide"
                                >
                                    {item.subMenu.map((sub, sIndex) => (
                                        <li key={sIndex}>
                                            <NextLink
                                                href={sub.href}
                                                as={sub.asPath}
                                            >
                                                <a
                                                    title={sub.label}
                                                    data-ellipsis={sub.label}
                                                    data-active={
                                                        item.siblings.indexOf(
                                                            pathname
                                                        ) !== -1 &&
                                                        sub.asPath.indexOf(
                                                            asPath
                                                        ) !== -1
                                                    }
                                                >
                                                    <span>
                                                        {
                                                            sub.label.split(
                                                                "/"
                                                            )[0]
                                                        }
                                                    </span>
                                                </a>
                                            </NextLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
