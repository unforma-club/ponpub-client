import styles from "./aside.module.scss";
import { useTheme } from "next-themes";
import { AsideLogo } from "./AsideLogo";
import pJson from "../../package.json";

export const Aside = () => {
    const { setTheme, themes, theme } = useTheme();
    return (
        <aside className={styles.container}>
            <header>
                <AsideLogo />
            </header>

            <footer
                style={{
                    marginTop: "auto",
                    padding: "var(--grid-gap)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div>Version {pJson.version}</div>
                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                >
                    {themes.map((item, i) => (
                        <option key={i} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </footer>
        </aside>
    );
};
