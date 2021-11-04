import type { PayloadFont } from "@ponpub/font";
import axios from "axios";
import useSWR from "swr";

import { LayoutMain } from "components/Layout";
import { Masonry } from "components/Utils/Masonry";
import { CardTypeface } from "components/Card";
import { HeaderPage } from "components/Header";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Page(props: any) {
    const fontURI = "/api/v1/post/font";
    const { data } = useSWR<Array<PayloadFont>>(fontURI, fetcher, {
        fallbackData: props.fonts,
    });

    const breakpointColumnsObj = {
        default: 7,
        1920: 6,
        1600: 5,
        1366: 4,
        1280: 3,
        960: 2,
        780: 1,
    };

    if (!data)
        return (
            <LayoutMain>
                <div className="wip">Loading...</div>
            </LayoutMain>
        );
    if (data.length === 0)
        return (
            <LayoutMain>
                <div className="wip">No data yet</div>
            </LayoutMain>
        );

    return (
        <LayoutMain>
            <HeaderPage>
                <span
                    style={{
                        height: "calc(var(--grid-gap) * 4)",
                        border: "1px solid",
                        padding: "0 calc(var(--grid-gap) * 1)",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "var(--accents-1)",
                        filter: "var(--filter-shadow)",
                    }}
                >
                    Header
                </span>
            </HeaderPage>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                containerStyle={{ paddingBottom: "calc(var(--grid-gap) * 2)" }}
            >
                {data.map((item, i) => {
                    return <CardTypeface key={i} font={item} />;
                })}
            </Masonry>
        </LayoutMain>
    );
}
