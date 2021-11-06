import type { UserPayload } from "@ponpub/user";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { AxiosConfig } from "libs/api/axios-config";

export const getServerSideProps: GetServerSideProps<{
    user: UserPayload | null;
}> = async (ctx) => {
    const reqUser = await AxiosConfig(ctx.req).get<UserPayload>("/api/v1/auth");
    const user = reqUser.data;

    if (user && user.role !== 0)
        return {
            redirect: {
                permanent: false,
                destination: "/?source=auth&message=authorized-user",
            },
        };

    return {
        props: { user },
    };
};

type NewPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Page({}: NewPageProps) {
    const { reload } = useRouter();
    return (
        <main>
            <button
                style={{
                    appearance: "none",
                    background: "none",
                    border: "1px solid",
                    cursor: "pointer",

                    padding: "0 var(--grid-gap)",

                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "inherit",
                    fontFamily: "inherit",
                    color: "currentcolor",
                    filter: "var(--filter-shadow)",
                }}
                onClick={() =>
                    axios
                        .post("/api/v1/auth/sign-in", {
                            email: "admin@ponpub.com",
                            password: "mantep",
                        })
                        .then(() => reload())
                        .catch((err) => console.error(err))
                }
            >
                <span
                    style={{
                        fontSize: "3em",
                        textTransform: "uppercase",
                    }}
                >
                    Login
                </span>
            </button>
        </main>
    );
}
