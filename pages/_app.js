import State from "../src/context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <State>
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;
