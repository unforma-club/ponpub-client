import styles from "./aside.module.scss";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { MAIN_MENU } from "libs/constants/main-menus";
import { SVGIcon } from "components/Utils/SVGIcon";
import { useAside } from "libs/context/ContextAside";

export const AsideMenu = () => {
    const { pathname, asPath } = useRouter();
    const { asideState } = useAside();

    return (
        <nav>
            <ul className={styles.menu} data-aside={asideState}>
                {MAIN_MENU.map((parent, i) => (
                    <li key={i}>
                        <div className={styles.parent} data-aside={asideState}>
                            {parent.group}
                        </div>

                        <ul className={styles.sub_menu}>
                            {parent.subMenu.map((sub, i) => (
                                <li
                                    key={i}
                                    className={styles.child}
                                    data-additonal={sub.action ? true : false}
                                    data-active={asPath.includes(
                                        // @ts-ignore
                                        sub.link.href.pathname.toString()
                                    )}
                                >
                                    <NextLink {...sub.link}>
                                        <a
                                            title={sub.label}
                                            data-aside={asideState}
                                            data-action={false}
                                            data-active={pathname.includes(
                                                // @ts-ignore
                                                sub.link.href.pathname.toString()
                                            )}
                                        >
                                            <SVGIcon type={sub.icon} />
                                            <span>{sub.label}</span>
                                        </a>
                                    </NextLink>
                                    {sub.action && (
                                        <NextLink {...sub.action.link}>
                                            <a
                                                title={sub.action.label}
                                                data-aside={asideState}
                                                data-action={true}
                                                data-active={pathname.includes(
                                                    // @ts-ignore
                                                    sub.action.link.href.pathname.toString()
                                                )}
                                            >
                                                <SVGIcon
                                                    type={sub.action.icon}
                                                />
                                            </a>
                                        </NextLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
