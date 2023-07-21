import Script from "next/script";
import "../styles/global.css";
import "../styles/main.scss";
import { str } from "../welcomeConsole";

console.info(
  str,
  "color: red",
  "background-color: blue",
  "background-color: green"
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NODE_ENV !== "development" && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_GA_ID}`}
          />
          <Script strategy="lazyOnload">
            {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         
         gtag('config', '${process.env.REACT_GA_ID}');
       `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
