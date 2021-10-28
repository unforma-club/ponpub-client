import styles from "./layout.module.scss";
import type { CSSProperties, FC } from "react";
import NextHead from "next/head";
import { useAside } from "libs/context/ContextAside";

interface LayoutMainProps {
    style?: CSSProperties;
    className?: string;
    title?: string;
    description?: string;
}

export const LayoutMain: FC<LayoutMainProps> = ({
    children,
    style,
    className,
    title = "Ponpub",
    description = "Ponpub Content Management System",
}) => {
    const { asideState } = useAside();

    return (
        <>
            <NextHead>
                <title>{title}</title>
                <meta name="description" content={description} />
            </NextHead>

            <main
                className={`${styles.main} ${className}`}
                style={{ ...style }}
                data-aside={asideState}
            >
                {children}
            </main>
        </>
    );
};
