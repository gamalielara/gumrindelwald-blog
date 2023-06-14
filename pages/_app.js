import "../styles/globals.css";
import { str } from "../welcomeConsole";

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
