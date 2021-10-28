import axios from "axios";
import useSWR from "swr";
import { GUEST, UserPayload } from "@ponpub/user";
import { LayoutMain } from "components/Layout";

interface NewData extends UserPayload {
	api_version: number;
}

const fetcher = (uri: string) => axios.get(uri).then((res) => res.data);
export default function Page() {
	const uri = "/api/v1/test";
	const { data } = useSWR<NewData>(uri, fetcher, {
		fallbackData: { api_version: 1, ...GUEST },
	});

	return (
		<LayoutMain>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</LayoutMain>
	);
}
