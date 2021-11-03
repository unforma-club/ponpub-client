export type IconType =
    | "add"
    | "add-circle"
    | "check"
    | "chevron-right"
    | "description"
    | "delete"
    | "expand-more"
    | "expand-less"
    | "format-shapes"
    | "goods"
    | "groups"
    | "people"
    | "person"
    | "restart"
    | "replay"
    | "refresh"
    | "settings"
    | "store"
    | "store-front"
    | "supervisor"
    | "tune"
    | "typeface"
    | "verified"
    | "view-list"
    | "view-grid"
    | "visibility"
    | "unfold-more"
    | "unfold-less";

interface SVGIconType {
    type: IconType;
}

export const SVGIcon = ({ type }: SVGIconType) => {
    switch (type) {
        case "add":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            );

        case "add-circle":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 9h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                        opacity=".3"
                    />
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
            );

        case "check":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
            );

        case "chevron-right":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>
            );

        case "delete":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                </svg>
            );

        case "description":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                        d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                        opacity=".3"
                    />
                    <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                </svg>
            );

        case "expand-less":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
                </svg>
            );

        case "expand-more":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                </svg>
            );

        case "format-shapes":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                        d="M3 3h2v2H3zm16 16h2v2h-2zm0-16h2v2h-2zM3 19h2v2H3z"
                        opacity=".3"
                    />
                    <path d="M11.29 7l-3.4 9h1.62l.73-2h3.49l.74 2h1.63l-3.41-9h-1.4zm-.6 5.74L12 8.91l1.3 3.83h-2.61zM17 3H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2V1h-6v2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm16 0h-2v-2h2v2zM19 3h2v2h-2V3zm0 14h-2v2H7v-2H5V7h2V5h10v2h2v10z" />
                </svg>
            );

        case "goods":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <rect fill="none" height="24" width="24" />
                    <path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z" />
                </svg>
            );

        case "groups":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <rect fill="none" height="24" width="24" />
                    <g opacity=".3">
                        <path d="M8.07,16c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69 H8.07z M12,8c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8" />
                    </g>
                    <g>
                        <path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" />
                    </g>
                </svg>
            );

        case "people":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" />
                </svg>
            );

        case "person":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            );

        case "restart":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z" />
                </svg>
            );

        case "replay":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z" />
                </svg>
            );

        case "refresh":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                </svg>
            );

        case "settings":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
            );

        case "store":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M5.64 9l-.6 3h13.92l-.6-3z" opacity=".3" />
                    <path d="M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm-8 11H6v-4h6v4zm-6.96-6l.6-3h12.72l.6 3H5.04z" />
                </svg>
            );

        case "store-front":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <circle cx="6.18" cy="17.82" r="2.18" />
                    <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
                </svg>
            );

        case "supervisor":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <circle cx="9" cy="8.5" opacity=".3" r="1.5" />
                    <path
                        d="M4.77 17h4.28c.01-.06.12-.58.29-.99-.11 0-.23-.01-.34-.01-1.53 0-3.25.5-4.23 1z"
                        opacity=".3"
                    />
                    <path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32z" />
                </svg>
            );

        case "tune":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                </svg>
            );

        case "typeface":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z" />
                </svg>
            );

        case "verified":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    height="1.25em"
                    width="1.25em"
                    fill="currentColor"
                >
                    <g>
                        <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                        <g>
                            <path
                                d="M18.49,9.88l0.08-0.85l0.18-1.95l-1.9-0.43l-0.84-0.19l-0.44-0.74l-0.99-1.68L12.79,4.8L12,5.14L11.21,4.8 L9.42,4.03L8.43,5.71L7.99,6.45L7.15,6.64l-1.9,0.43l0.18,1.94l0.08,0.85l-0.56,0.65l-1.29,1.48l1.29,1.47l0.56,0.65l-0.08,0.85 l-0.18,1.96l1.9,0.43l0.84,0.19l0.44,0.74l0.99,1.67l1.78-0.77L12,18.85l0.79,0.34l1.78,0.77l0.99-1.68l0.44-0.74l0.84-0.19 l1.9-0.43l-0.18-1.95l-0.08-0.85l0.56-0.65l1.29-1.47l-1.29-1.47L18.49,9.88z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"
                                opacity=".3"
                            />
                            <path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z" />
                            <polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87" />
                        </g>
                    </g>
                </svg>
            );

        case "view-list":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                </svg>
            );

        case "view-grid":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z" />
                </svg>
            );

        case "visibility":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                </svg>
            );

        case "unfold-more":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
                </svg>
            );

        case "unfold-less":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.25em"
                    height="1.25em"
                    fill="currentColor"
                >
                    <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
                    <path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z" />
                </svg>
            );

        default:
            return <>Required Type</>;
    }
};
