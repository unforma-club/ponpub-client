import pJson from "package.json";

export const Footer = () => {
    return (
        <footer
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                height: "1.2em",
                overflow: "hidden",
                // backgroundColor: "var(--geist-ufc-color)",
                borderTop: "1px solid",
                backgroundColor: "var(--accents-1)",
                color: "var(--accents-5)",
                padding: `0 calc(var(--grid-gap) * 2)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 1001,
                fontFeatureSettings: `"ss01", "ss04", "tnum"`,
                boxShadow: "0em -0.5em 0.25em -0.5em var(--shadow-color)",
            }}
        >
            <div style={{ fontSize: "0.7em" }}>
                ©2020-2021{" "}
                <a
                    href="https://ponpub.unforma.club"
                    target="_blank"
                    rel="noopener noreferer"
                >
                    Ponpub
                </a>
                . All rights reserved by{" "}
                <a
                    href="https://unforma.club"
                    target="_blank"
                    rel="noopener noreferer"
                >
                    Unforma™Club
                </a>{" "}
                .
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "var(--grid-gap)",
                }}
            >
                <a
                    href={pJson.repository}
                    target="_blank"
                    rel="noopener noreferer"
                    style={{ fontSize: "0.7em" }}
                >
                    GitHub
                </a>
                <span
                    style={{ fontSize: "0.7em", fontFeatureSettings: `"case"` }}
                >
                    / {pJson.version}
                </span>
            </div>
        </footer>
    );
};
