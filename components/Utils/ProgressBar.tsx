import nprogress from "nprogress";
import Router from "next/router";

const ProgressBar = () => {
    let timeout: any;
    const body = document.body;
    const attr = "data-overflow";

    const start = () => {
        timeout = setTimeout(() => {
            body.setAttribute(attr, "true");
            nprogress.start();
        }, 0);
    };
    const done = () => {
        body.removeAttribute(attr);
        clearTimeout(timeout);
        nprogress.done();
    };

    Router.events.on("routeChangeStart", () => start());
    Router.events.on("routeChangeComplete", () => done());
    Router.events.on("routeChangeError", () => done());

    return (
        <style jsx global>{`
            #nprogress {
                pointer-events: none;
                z-index: 2000;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                overflow: hidden;
                height: calc(var(--grid-gap) / 4);
                touch-action: none;
                background-color: var(--accents-1);
            }
            #nprogress .bar {
                width: 100%;
                height: 100%;
            }
            #nprogress .bar .peg {
                background-color: var(--geist-ufc-color);
                height: 100%;
            }
            .nprogress-busy {
                pointer-events: none;
                touch-action: none;
                cursor: progress;
            }
        `}</style>
    );
};

export default ProgressBar;
