import "../styles/globals.css";
import "/styles/slick/slick.css";
import "/styles/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/index";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        {/* AOS Animation */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
