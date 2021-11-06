import "styles/global.scss";
import type { PayloadFont } from "@ponpub/font";
import type { UserPayload } from "@ponpub/user";
import type { AppProps, AppContext } from "next/app";
import type { NextPageContext } from "next";

import App from "next/app";
import NextHead from "next/head";
import NextDynamic from "next/dynamic";
import NextRouter from "next/router";

import { ThemeProvider } from "next-themes";

import { ProviderFontData } from "libs/context/ContextFontData";
import { ProviderAside } from "libs/context/ContextAside";
import { Aside } from "components/Aside";
import { Footer } from "components/Footer";
import { AxiosConfig } from "libs/api/axios-config";
import useSWR from "swr";
import axios from "axios";
import { useEffect } from "react";

const ProgressBar = NextDynamic(() => import("components/Utils/ProgressBar"), {
    ssr: false,
});

interface MyAppProps extends AppProps {
    fonts: Array<PayloadFont>;
    user: UserPayload | null;
}

const fetcher = (url: string) =>
    axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => console.log("User _app.tsx/t", err));

export default function MyApp(props: MyAppProps) {
    const { Component, pageProps, fonts, router, user } = props;
    const { data: clientUser } = useSWR<UserPayload>("/api/v1/auth", fetcher, {
        fallback: user,
    });

    useEffect(() => {
        if (!clientUser) return;
        if (router.pathname === "/auth") return;
        const isGuest = clientUser.role <= 0;
        if (!isGuest) return;
        router.reload();
    }, [clientUser]);
    return (
        <>
            <NextHead>
                {/* {fonts.map((item, i) => (
                    <link
                        key={i}
                        rel="preload"
                        // as="font"
                        type="text/css"
                        href={item.stylesheet.fileUrl}
                        crossOrigin=""
                    />
                ))} */}
                {/* {fonts.map((item) =>
                    item.typefaces.map((typeface, i) => (
                        <link
                            key={i}
                            rel="preload"
                            href={typeface.file.url}
                            type={typeface.file.type}
                            as="font"
                            crossOrigin=""
                        />
                    ))
                )} */}
                {fonts.map((item, i) => (
                    <link
                        key={i}
                        rel="stylesheet"
                        type="text/css"
                        crossOrigin=""
                        href={item.stylesheet.fileUrl}
                    />
                ))}
            </NextHead>

            <ThemeProvider
                disableTransitionOnChange
                defaultTheme="system"
                themes={["dark", "light", "gray", "mess"]}
            >
                <ProgressBar />
                <ProviderFontData fonts={fonts}>
                    <ProviderAside>
                        {router.pathname !== "/auth" && <Aside />}
                        <Component {...pageProps} fonts={fonts} user={user} />
                        {router.pathname !== "/auth" && <Footer />}
                    </ProviderAside>
                </ProviderFontData>
            </ThemeProvider>
        </>
    );
}

const redirectUser = (ctx: NextPageContext, location: string) => {
    const { res } = ctx;
    if (res) {
        res.writeHead(307, { Location: location });
        res.end();
    } else {
        NextRouter.replace(location);
    }
};

MyApp.getInitialProps = async (appContext: AppContext) => {
    const { ctx } = appContext;
    const appProps = await App.getInitialProps(appContext);
    const reqUser = await AxiosConfig(ctx.req).get<UserPayload>("/api/v1/auth");
    const user = reqUser.data;

    /**
     * The purposes of these methods below is to prevent unauthorized user for accessing the site.
     * The whole site can only be accessed by an authorized user.
     */

    const unProtect = ctx.pathname === "/auth";
    if (!user) {
        if (!unProtect) {
            return redirectUser(
                ctx,
                "/auth?source=index&message=user-not-found"
            );
        }
    }
    if (!unProtect) {
        if (user.role === 0) {
            return redirectUser(
                ctx,
                "/auth?source=index&message=unauthorized-user"
            );
        }
    }

    /**
     * Make sure defer fetching fonts if user not available for avoiding bandwidth load
     */
    let fonts: Array<PayloadFont> = [];
    if (user.role !== 0) {
        const reqFonts = await AxiosConfig(ctx.req).get("/api/v1/post/font");
        fonts = reqFonts.data;
    }

    return {
        ...appProps,
        fonts: fonts,
        user: user ? user : null,
    };
};
