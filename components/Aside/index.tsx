import styles from "./aside.module.scss";
import pJson from "../../package.json";
import { useTheme } from "next-themes";
import { useAside } from "libs/context/ContextAside";
import { AsideLogo } from "./AsideLogo";
import { AsideMenu } from "./AsideMenu";

export const Aside = () => {
    const { setTheme, themes, theme } = useTheme();
    const { asideState } = useAside();
    return (
        <aside className={styles.container} data-aside={asideState}>
            <header>
                <AsideLogo />
            </header>

            <AsideMenu />

            <footer
                style={{
                    marginTop: "auto",
                    padding: "var(--grid-gap) calc(var(--grid-gap) * 2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    // flexDirection: !asideState ? "column" : "initial",
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
