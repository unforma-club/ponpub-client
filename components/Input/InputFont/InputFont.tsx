import styles from "./input.module.scss";
import type { DragEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useNewFont } from "libs/context/ContextNewFont";

type DragEventProps = DragEvent<HTMLFormElement>;

export const InputFont = () => {
    const { addTypefaces } = useNewFont();

    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragOver, setDragOver] = useState<boolean>(false);
    const [isDrop, setDrop] = useState<boolean>(false);

    const onDragOver = (e: DragEventProps) => e.preventDefault();
    const onDragEnter = (e: DragEventProps) => {
        e.preventDefault();
        setDragOver(true);
    };
    const onDragLeave = (e: DragEventProps) => {
        e.preventDefault();
        setDragOver(false);
    };
    const onDrop = (e: DragEventProps) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (!files) throw new Error("Font files must be defined");
        setDragOver(false);
        setDrop(true);
        addTypefaces(files);
    };

    useEffect(() => {
        if (!inputRef.current) return;
        const refCurent = inputRef.current;
        return () => {
            refCurent.files = null;
        };
    }, []);

    return (
        <form
            data-drag={isDragOver}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            className={styles.container}
        >
            <label
                style={{
                    fontFeatureSettings: `"ss01", "ss04", "case"`,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                }}
            >
                <div>
                    {isDrop ? (
                        <>Reading...</>
                    ) : (
                        <>
                            Drop [otf/ttf]
                            <br /> or Click here...
                        </>
                    )}
                </div>
                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept=".otf, .ttf"
                    style={{ display: "none" }}
                    disabled={isDrop}
                    onChange={(e) => {
                        setDrop(true);
                        const files = e.target.files;
                        if (!files)
                            throw new Error("Font files must be defined");
                        addTypefaces(files);
                    }}
                />
            </label>
        </form>
    );
};
