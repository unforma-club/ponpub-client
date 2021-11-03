import { useNewFont } from "libs/context/ContextNewFont";

export const InputData = () => {
    const { typefaces, handleSubmit, setTypefaces } = useNewFont();
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
                        value={typefaces[0].name.family}
                        placeholder="Family"
                        onChange={(e) =>
                            setTypefaces((prev) => {
                                prev.forEach((item) => {
                                    return (item.name.family = e.target.value);
                                });
                                return [...prev];
                            })
                        }
                    />
                    <input
                        type="text"
                        value={typefaces[0].name.subFamily}
                        placeholder="Sub Family"
                        onChange={(e) =>
                            setTypefaces((prev) => {
                                prev.forEach((item) => {
                                    return (item.name.subFamily =
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
                            fontFamily: `${item.name.fullName}, var(--font-sans)`,
                            fontStyle:
                                item.info.style === "italic"
                                    ? "italic"
                                    : "normal",
                            fontWeight: item.info.weight,
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(5, 1fr)",
                                alignItems: "center",
                                gap: "var(--grid-gap)",
                                fontSize: "1.3em",
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
                                {item.name.family}
                            </span>
                            <span
                                style={{
                                    display: "block",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.name.subFamily
                                    ? item.name.subFamily
                                    : "-"}
                            </span>
                            <span
                                style={{
                                    display: "block",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.name.shortName}{" "}
                                {item.variable && " - Var"}
                            </span>
                            <span
                                style={{
                                    display: "block",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.info.weight}
                            </span>
                            <span
                                style={{
                                    display: "block",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.file.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
