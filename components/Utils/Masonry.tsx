import {
    useState,
    ReactNode,
    useEffect,
    FC,
    CSSProperties,
    useCallback,
} from "react";

type MasonryProps = {
    breakpointCols: any;
    containerClass?: string;
    columnClass?: string;
    containerStyle?: CSSProperties;
    columnStyle?: CSSProperties;
    onClick?: () => any;
};

const DEFAULT_COLUMNS = 2;

export const Masonry: FC<MasonryProps> = (props) => {
    const {
        children,
        breakpointCols,
        containerClass = "masonry",
        columnClass = "masonry-column",
        containerStyle,
        columnStyle,
        onClick,
    } = props;
    const [columnCount, setColumnCount] = useState<number>(
        breakpointCols.default
    );
    const reCalculateColumnCount = () => {
        const windowWidth = window && window.innerWidth;

        let matchedBreakpoint: number = Infinity;
        let columns: number = breakpointCols.default || DEFAULT_COLUMNS;

        for (const breakpoint in breakpointCols) {
            const optBreakpoint = parseInt(breakpoint);
            const isCurrentBreakpoint =
                optBreakpoint > 0 && windowWidth <= optBreakpoint;
            if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
                matchedBreakpoint = optBreakpoint;
                columns = breakpointCols[breakpoint];
            }
        }

        columns = Math.max(1, columns || 1);
        if (columnCount !== columns) {
            setColumnCount(columns);
        }
        setColumnCount(columns);
    };

    const reCalculateColumnCountDebounce = () => {
        if (typeof window === "undefined") return;
        window.requestAnimationFrame(() => reCalculateColumnCount());
    };

    const itemsInColumns = useCallback(() => {
        let newArr: ReactNode[] = [];

        const currentColumnCount = columnCount;
        const itemsInColumns = new Array(currentColumnCount);
        const items: ReactNode[] = newArr.concat(children);

        for (let i = 0; i < items.length; i++) {
            const columnIndex = i % currentColumnCount;
            if (!itemsInColumns[columnIndex]) itemsInColumns[columnIndex] = [];
            itemsInColumns[columnIndex].push(items[i]);
        }

        return itemsInColumns;
    }, [reCalculateColumnCount, breakpointCols]);

    const renderColumns = () => {
        const childrenColumns = itemsInColumns();

        const columnAttributes = {
            style: {
                ...columnStyle,
            },
        };

        return childrenColumns.map((items: any, i: number) => (
            <ul key={i} className={columnClass} {...columnAttributes}>
                {items}
            </ul>
        ));
    };

    useEffect(() => {
        reCalculateColumnCount();
    }, [breakpointCols]);

    useEffect(() => {
        window.addEventListener("resize", reCalculateColumnCountDebounce);
        return () =>
            window.removeEventListener(
                "resize",
                reCalculateColumnCountDebounce
            );
    }, []);

    return (
        <div
            style={{
                ...containerStyle,
                // @ts-ignore
                "--masonry-template-columns": `repeat(${
                    itemsInColumns().length
                }, minmax(4em, 1fr))`,
            }}
            onClick={onClick ? onClick : undefined}
            className={containerClass}
        >
            {renderColumns()}
        </div>
    );
};
