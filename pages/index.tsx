import type { PageProps } from "global";
import NextImage from "next/image";
import { LayoutMain } from "components/Layout";

export default function Page(props: PageProps) {
    const { user } = props;
    return (
        <LayoutMain>
            <div>
                <div>{user.name}</div>
                <NextImage src={user.image!} width={24} height={24} />
            </div>
            <pre>{JSON.stringify({ user: props.user }, null, 2)}</pre>
        </LayoutMain>
    );
}
