export interface VariableAxes {
    defaultValue: number;
    max: number;
    min: number;
    name: string;
    step: number;
    tag: string;
    value: number;
}
export interface VariableInstance {
    coordinates: {
        [key: string]: string;
    };
    name: string;
}
export interface VariableFont {
    axes: Array<VariableAxes>;
    instances: Array<VariableInstance> | null;
}

interface KeyValue {
    value: string;
    url: string;
}

export interface BaseTypeface {
    file: {
        name: string;
        size: number;
        type: string;
        url: string;
        destination: string;
    };
    variable: VariableFont | null;
    name: {
        family: string;
        subFamily: string;
        fullName: string;
        shortName: string;
    };
    info: {
        copyright: string;
        trademark: string;
        version: string;
        designer: KeyValue;
        license: KeyValue;
        manufacturer: KeyValue;
        tables: Array<string>;
        style: string;
        weight: number;
        metrics: {
            unitsPerEm: number;
            usWinAscent: number;
            usWinDescent: number;
            sTypoAscender: number;
            sTypoDescender: number;
            descender: number;
            ascender: number;
            xHeight: number;
            capHeight: number;
            baseLine: number;
            xMax: number;
            xMin: number;
            yMax: number;
            yMin: number;
        };
    };
}
