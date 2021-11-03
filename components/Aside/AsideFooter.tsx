import styles from "./aside.module.scss";
import { CSSProperties, useState } from "react";
import { useTheme } from "next-themes";
import { SVGIcon } from "components/Utils/SVGIcon";
import { useAside } from "libs/context/ContextAside";

const buttonStyle: CSSProperties = {
    appearance: "none",
    background: "none",
    border: "none",
    fontSize: "inherit",
    fontFamily: "inherit",
    cursor: "pointer",
    height: "1.75em",
    width: "100%",
    textAlign: "left",
};

const SelectorTheme = () => {
    const { setTheme, themes, theme } = useTheme();
    const [state, setState] = useState(false);
    return (
        <li
            // onMouseEnter={() => setState(true)}
            // onMouseLeave={() => setState(false)}
            style={{
                position: "relative",
                borderBottom: "1px solid",
                height: "1.75em",
                fontSize: "0.8em",
            }}
        >
            <button
                style={{ ...buttonStyle }}
                onClick={() => setState((prev) => !prev)}
                // onMouseEnter={() => setState(true)}
                // onMouseLeave={() => setState(false)}
            >
                Theme
            </button>
            {state && (
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        position: "absolute",
                        top: 0,
                        right: "calc(0px - var(--grid-gap))",
                        transform: "translate(100%, -50%)",
                        border: "1px solid",
                    }}
                >
                    {themes.map((item, i) => (
                        <li key={i}>
                            <button
                                onClick={() => setTheme(item)}
                                data-active={theme === item}
                                style={{ ...buttonStyle }}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export const AsideFooter = () => {
    const [state, setState] = useState(false);
    const { asideState } = useAside();
    return (
        <footer className={styles.footer} data-aside={asideState}>
            <div className={styles.setting_container}>
                <button
                    data-active={state}
                    className={styles.toggle}
                    onClick={() => setState((prev) => !prev)}
                >
                    <SVGIcon type="settings" />
                </button>

                {state && (
                    <ul className={styles.setting_list}>
                        <SelectorTheme />
                        <SelectorTheme />
                        <SelectorTheme />
                        <SelectorTheme />
                    </ul>
                )}
            </div>
        </footer>
    );
};
