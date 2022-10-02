import "../styles/globals.css";
import "/styles/slick/slick.css";
import "/styles/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import { store } from '../store/index'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
