import "styles/global.scss";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ProviderAside } from "libs/context/ContextAside";
import { Aside } from "components/Aside";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider
                disableTransitionOnChange
                defaultTheme="light"
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
