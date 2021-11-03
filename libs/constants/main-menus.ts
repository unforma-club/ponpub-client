import { IconType } from "components/Utils/SVGIcon";
import { LinkProps } from "next/link";

interface LinkAttr {
    label: string;
    link: LinkProps;
    icon: IconType;
    role?: "parent" | "child";
    action?: {
        link: LinkProps;
        icon: IconType;
        label: string;
    };
}

interface Menus {
    group: string;
    subMenu: Array<LinkAttr>;
}

export const MAIN_MENU: Array<Menus> = [
    {
        group: "Post",
        subMenu: [
            {
                label: "Blog",
                icon: "description",
                link: {
                    href: {
                        pathname: "/post/blog",
                        query: { view: "grid" },
                    },
                },
                action: {
                    link: {
                        href: {
                            pathname: "/editor/blog/new",
                        },
                    },
                    icon: "add",
                    label: "Add Blog",
                },
            },
            {
                label: "Goods",
                icon: "store",
                link: {
                    href: {
                        pathname: "/post/goods",
                        query: { view: "grid" },
                    },
                },
                action: {
                    link: {
                        href: {
                            pathname: "/editor/goods/new",
                        },
                    },
                    icon: "add",
                    label: "Add Goods",
                },
            },
            {
                label: "Typeface",
                icon: "format-shapes",
                link: {
                    href: {
                        pathname: "/post/typeface",
                        query: { view: "grid", publish: true },
                    },
                },
                action: {
                    link: {
                        href: {
                            pathname: "/editor/typeface/new",
                        },
                    },
                    icon: "add",
                    label: "Add Typeface",
                },
            },
        ],
    },
    {
        group: "User",
        subMenu: [
            {
                label: "Members",
                icon: "groups",
                link: {
                    href: {
                        pathname: "/user",
                        query: { view: "list" },
                    },
                },
            },
            {
                label: "Staffs",
                icon: "verified",
                link: {
                    href: {
                        pathname: "/staff",
                        query: { view: "grid" },
                    },
                },
            },
        ],
    },
    // {
    //     group: "Restricted",
    //     subMenu: [
    //         {
    //             label: "Storage",
    //             icon: "verified",
    //             link: { href: { pathname: "/storage" } },
    //         },
    //         {
    //             label: "Auth",
    //             icon: "verified",
    //             link: { href: { pathname: "/auth" } },
    //         },
    //     ],
    // },
];
