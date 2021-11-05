import axios from "axios";
import nProgress from "nprogress";

interface HandleDeleteProps {
    styleID: string;
    typefacesID: Array<string>;
    fontID: string;
}

const concurentDelete = async (list: Array<string>) => {
    return Promise.all(
        list.map(async (item) => {
            await axios.delete(`/api/v1/content/typeface/${item}`);
            return new Promise<null>((resolve) => resolve(null));
        })
    );
};

export const handleDeleteFont = async (props: HandleDeleteProps) => {
    nProgress.start();

    const { styleID, typefacesID, fontID } = props;

    await axios
        .delete(`/api/v1/content/css/${styleID}`)
        .catch((err) => console.log(err));

    await concurentDelete(typefacesID);

    await axios
        .delete(`/api/v1/post/font/${fontID}`)
        .catch((err) => console.log(err));
};
