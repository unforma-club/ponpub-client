import { useFontInput } from "libs/context/ContextFontInput";

export const InputData = () => {
    const { typefaces, handleSubmit, setTypefaces } = useFontInput();
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                gap: "var(--grid-ga)",
            }}
        >
            <aside style={{ width: "var(--aside-width)" }}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <input
                        type="text"
                        value={typefaces[0].typefaceFamily}
                        placeholder="Family"
                        onChange={(e) =>
                            setTypefaces((prev) => {
                                prev.forEach((item) => {
                                    return (item.typefaceFamily =
                                        e.target.value);
                                });
                                return [...prev];
                            })
                        }
                    />
                    <input
                        type="text"
                        value={typefaces[0].typefaceSubFamily}
                        placeholder="Sub Family"
                        onChange={(e) =>
                            setTypefaces((prev) => {
                                prev.forEach((item) => {
                                    return (item.typefaceSubFamily =
                                        e.target.value);
                                });
                                return [...prev];
                            })
                        }
                    />

                    <button type="submit">Submit</button>
                </form>
            </aside>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {typefaces.map((item, i) => (
                    <li
                        key={i}
                        style={{
                            fontFamily: `${item.typefaceFullName}, var(--font-sans)`,
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "2fr 2fr 1fr 1fr",
                                alignItems: "center",
                                gap: "var(--grid-gap)",
                            }}
                        >
                            <span
                                style={{
                                    display: "block",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.typefaceFamily}
                            </span>
                            <span
                                style={{
                                    display: "block",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.typefaceFullName}
                            </span>
                            <span>
                                {item.typefaceVariable ? "Variable" : "-"}
                            </span>
                            <span>{item.typefaceWeight}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
