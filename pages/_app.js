import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import "../styles/globals.css";

const progress = new ProgressBar({
	size: 4,
	color: "#fe595e",
	className: "z-50",
	delay: 100,
});

Router.events.on("routerChangeStart", progress.start);
Router.events.on("routerChangeComplet", progress.finish);
Router.events.on("routerChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
