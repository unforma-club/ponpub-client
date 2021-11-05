import { PayloadFont } from "@ponpub/font";
import axios from "axios";
import { createContext, FC, useContext } from "react";
import useSWR from "swr";

interface ProviderFontDataProps {
    fonts: PayloadFont[];
}

interface ContextFontDataProps extends ProviderFontDataProps {
    API_FONT: string;
}

const init: ContextFontDataProps = {
    fonts: [],
    API_FONT: "/api/v1/post/font",
};

const ContextFontData = createContext<ContextFontDataProps>(init);
export const useFontData = () => useContext(ContextFontData);
export const ConsumerFontData = ContextFontData.Consumer;

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const ProviderFontData: FC<ProviderFontDataProps> = (props) => {
    const { children, fonts: serverFonts } = props;
    const { data } = useSWR<Array<PayloadFont>>(init.API_FONT, fetcher, {
        fallbackData: serverFonts,
    });
    return (
        <ContextFontData.Provider
            value={{ fonts: data, API_FONT: init.API_FONT }}
        >
            {children}
        </ContextFontData.Provider>
    );
};
