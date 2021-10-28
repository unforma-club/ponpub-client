const asignValue = (v: any | null) => {
    if (v === null) {
        return Infinity;
    } else {
        return 1;
    }
};
export const sortByNull = (a: any, b: any) => {
    return asignValue(a) - asignValue(b);
};
