import "../styles/globals.css";
import "/styles/slick/slick.css";
import "/styles/slick/slick-theme.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
