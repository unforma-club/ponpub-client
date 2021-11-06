import { PayloadFont } from "@ponpub/font";
import { UserPayload } from "@ponpub/user";

declare interface PageProps {
    fonts: Array<PayloadFont>;
    user: UserPayload;
}
