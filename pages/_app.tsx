import "styles/global.scss";
import App, { AppProps, AppContext } from "next/app";
import NextHead from "next/head";
import NextDynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { PayloadFont } from "@ponpub/font";

import { ProviderFontData } from "libs/context/ContextFontData";
import { ProviderAside } from "libs/context/ContextAside";
import { Aside } from "components/Aside";
import { Footer } from "components/Footer";
import { AxiosConfig } from "libs/api/axios-config";

const ProgressBar = NextDynamic(() => import("components/Utils/ProgressBar"), {
    ssr: false,
});

interface MyAppProps extends AppProps {
    fonts: Array<PayloadFont>;
}

export default function MyApp(props: MyAppProps) {
    const { Component, pageProps, fonts } = props;
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
                        <Aside />
                        <Component {...pageProps} fonts={fonts} />
                        <Footer />
                    </ProviderAside>
                </ProviderFontData>
            </ThemeProvider>
        </>
    );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
    const { ctx } = appContext;
    const appProps = await App.getInitialProps(appContext);

    /**
     * Make sure defer fetching fonts if user not available for avoiding bandwidth load
     */
    const fonts = await AxiosConfig(ctx.req).get("/api/v1/post/font");

    return {
        ...appProps,
        fonts: fonts.data,
    };
};
