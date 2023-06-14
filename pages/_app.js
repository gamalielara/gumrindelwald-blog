import "../styles/globals.css";
import { str } from "./str";

console.info(
  str,
  "color: red",
  "background-color: blue",
  "background-color: green"
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
