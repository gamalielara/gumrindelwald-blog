import "../styles/globals.css";
import string from "./welcomeString";

console.info(
  string,
  "color: red",
  "background-color: blue",
  "background-color: green"
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
