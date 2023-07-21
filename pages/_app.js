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
      <Script strategy="lazyOnload">
        {`var v="development"==="${process.env.NODE_ENV}"; var m="3EhX6lbrI3ejBeNLFedMNPOxiZlJrfijT5PGQ4DlPpg=";var g=navigator.userAgent.includes(atob(m));if(v||g);else{var e=document.createElement("script");e.src=\`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_GA_ID}\`,e.setAttribute("data-nscript","lazyOnload"),document.body.appendChild(e);var t=document.createElement("script");t.textContent='${process.env.REACT_GA_INIT_FUNC}',t.setAttribute("data-nscript","lazyOnload"),document.body.appendChild(t)}`}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
