import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const isHome = /\/\#/g.test(asPath) || asPath === "/" ? true : false;

  return (
    <>
      {!isHome && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
