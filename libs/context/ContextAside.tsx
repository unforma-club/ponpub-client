import type { FC } from "react";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

interface ContextAsideAttr {
    asideState: boolean;
    asideToggle: () => void;
}

const init: ContextAsideAttr = {
    asideState: true,
    asideToggle: () => ({}),
};

const ContextAside = createContext<ContextAsideAttr>(init);
export const useAside = () => useContext(ContextAside);

export const ProviderAside: FC = ({ children }) => {
    const [state, setState] = useState<boolean>(init.asideState);
    const asideToggle = useCallback(() => setState((prev) => !prev), [state]);

    useEffect(() => {
        if (typeof document === "undefined") return;
        const handler = (e: MouseEvent) => {
            const ctrlKey = e.ctrlKey;
            const button = e.button;
            if (!ctrlKey) return;
            if (button !== 1) return;
            asideToggle();
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") return;
        document.documentElement.setAttribute(
            "data-aside",
            JSON.stringify(state)
        );
    }, [state]);

    return (
        <ContextAside.Provider value={{ asideState: state, asideToggle }}>
            {children}
        </ContextAside.Provider>
    );
};
