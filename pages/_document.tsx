import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link rel="shortcut icon" href="image/icons/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="image/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="image/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="image/icons/favicon-16x16.png"
                    />

                    <link
                        rel="mask-icon"
                        href="image/icons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />

                    <link
                        rel="preload"
                        type="font/ttf"
                        as="font"
                        crossOrigin=""
                        href="/static/font/Space-Grotesk/SpaceGrotesk-VariableFont_wght.ttf"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/static/css/global.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
