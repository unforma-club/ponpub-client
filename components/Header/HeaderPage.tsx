import { FC } from "react";

export const HeaderPage: FC = ({ children }) => {
    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                display: "flex",
                gap: "calc(var(--grid-gap) / 2)",
                padding: "calc(var(--grid-gap) * 2) 0 0 0",
                marginBottom: "calc(var(--grid-gap) / 2)",
            }}
        >
            {children}
        </header>
    );
};
