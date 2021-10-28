import "styles/global.scss";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import nProgress from "nprogress";

import { ProviderAside } from "libs/context/ContextAside";
import { Aside } from "components/Aside";

// nProgress.configure({ speed: 100, easing: "ease-in-out", minimum: 0.1 });

export default function MyApp({ Component, pageProps, router }: AppProps) {
    /**
     * Run `nProgress` every page changes
     */
    useEffect(() => {
        const handleStart = () => nProgress.start();
        const handleStop = () => nProgress.done();

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    return (
        <>
            <ThemeProvider
                disableTransitionOnChange
                defaultTheme="system"
                themes={["dark", "light", "gray"]}
            >
                <ProviderAside>
                    <Aside />
                    <Component {...pageProps} />
                </ProviderAside>
            </ThemeProvider>
        </>
    );
}
