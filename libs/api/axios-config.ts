import { IncomingMessage } from "http";
import axios from "axios";

export const AxiosConfig = (req?: IncomingMessage) => {
    if (typeof window === "undefined" && req) {
        const protocol = "http";
        const url = req.headers.host;
        return axios.create({
            baseURL: `${protocol}://${url}`,
            // @ts-ignore
            headers: req.headers,
        });
    } else {
        return axios.create({
            baseURL: "/",
        });
    }
};
