import { NextPageContext } from "next";
import { ErrorProps } from "next/error";
import NextHead from "next/head";

export default function Error({ statusCode, title }: ErrorProps) {
    return (
        <>
            <NextHead>
                <title>
                    {statusCode} - {title}
                </title>
            </NextHead>
            <main
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    color: "var(--geist-error)",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "4rem",
                        fontWeight: "bold",
                        textAlign: "center",
                        userSelect: "none",
                    }}
                >
                    🥺
                    <br />
                    Server Error
                </div>
            </main>
        </>
    );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};
