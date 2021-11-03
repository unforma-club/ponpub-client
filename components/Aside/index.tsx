import styles from "./aside.module.scss";
import { useAside } from "libs/context/ContextAside";
import { AsideMenu } from "./AsideMenu";
import { AsideFooter } from "./AsideFooter";
import { PayloadFont } from "@ponpub/font";

interface AsideProps {
    fonts: PayloadFont[];
}

export const Aside = ({ fonts }: AsideProps) => {
    const { asideState } = useAside();
    return (
        <aside className={styles.container} data-aside={asideState}>
            <AsideMenu fonts={fonts} />
            <AsideFooter />
        </aside>
    );
};
