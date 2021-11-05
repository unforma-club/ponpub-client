import styles from "./aside.module.scss";
import { useAside } from "libs/context/ContextAside";
import { AsideMenu } from "./AsideMenu";
import { AsideFooter } from "./AsideFooter";

export const Aside = () => {
    const { asideState } = useAside();
    return (
        <aside className={styles.container} data-aside={asideState}>
            <AsideMenu />
            <AsideFooter />
        </aside>
    );
};
