import styles from "./aside.module.scss";
import NextLink from "next/link";
import { useAside } from "libs/context/ContextAside";

export const AsideLogo = () => {
    const { asideState } = useAside();
    return (
        <NextLink href="/">
            <a className={styles.logo} data-shrink={!asideState} title="Ponpub">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 64"
                    width="4em"
                >
                    {asideState && (
                        <>
                            <path
                                fill="var(--accents-8)"
                                d="M19.11,17.47H6.84V43.71H13V35h5.8c6,0,9.93-3.24,9.93-8.79S25,17.47,19.11,17.47ZM18.68,30H13V22.73h5.65c2.41,0,3.82,1.36,3.82,3.63C22.5,28.81,20.88,30,18.68,30Z"
                            />
                            <path
                                fill="var(--accents-8)"
                                d="M40,22.48c-6.44,0-10.58,4.31-10.58,10.83S33.52,44.07,40,44.07s10.55-4.32,10.55-10.8S46.37,22.48,40,22.48Zm0,16.7c-2.8,0-4.5-2.13-4.5-5.91s1.7-5.86,4.54-5.86,4.5,2.08,4.5,5.86S42.77,39.18,39.92,39.18Z"
                            />
                            <path
                                fill="var(--accents-8)"
                                d="M64.94,22.48a6.94,6.94,0,0,0-6.22,3.09l-.22-2.73H52.85V43.71H59V31.4a3.65,3.65,0,0,1,3.68-3.63c1.94,0,3.13,1,3.13,2.88V43.71h6.12V29.6C71.93,25,69.23,22.48,64.94,22.48Z"
                            />
                        </>
                    )}
                    <path
                        fill="var(--accents-8)"
                        d="M148.16,10h-67a5,5,0,0,0-5,5V49a5,5,0,0,0,5,5h67a5,5,0,0,0,5-5V15A5,5,0,0,0,148.16,10ZM94,44.07a6.5,6.5,0,0,1-5.94-3v8.67H81.93V22.84h5.65l.33,2.91c1-2.09,3.49-3.27,6.23-3.27,5.39,0,8.78,4.13,8.78,10.72S99.46,44.07,94,44.07Zm30.17-.36h-5.65L118.29,41a6.66,6.66,0,0,1-5.9,3.09c-4.43,0-7.24-2.66-7.24-7.41V22.84h6.12V35.4c0,2.27,1,3.38,3.06,3.38A3.61,3.61,0,0,0,118,35.22V22.84h6.16Zm15.44.36c-2.73,0-5.18-1.15-6.22-3.27l-.33,2.91H127.4V15.28h6.12V25.53a6.48,6.48,0,0,1,5.94-3.05c5.47,0,8.93,4.24,8.93,10.9S145,44.07,139.6,44.07Z"
                    />
                    <path
                        fill="var(--accents-8)"
                        d="M137.84,27.44c-2.77,0-4.32,1.87-4.32,5.33v1.15c0,3.39,1.58,5.19,4.32,5.19s4.32-2,4.32-5.8S140.68,27.44,137.84,27.44Z"
                    />
                    <path
                        fill="var(--accents-8)"
                        d="M92.37,27.44c-2.77,0-4.32,1.84-4.32,5.26v1.08c0,3.45,1.55,5.33,4.32,5.33s4.32-2.06,4.32-5.87S95.18,27.44,92.37,27.44Z"
                    />
                </svg>
            </a>
        </NextLink>
    );
};
