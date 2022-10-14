import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }) {
  const { asPath } = useRouter();
  const isHome =
    /(\/\#|\/login|\/logout|\/signup)/g.test(asPath) || asPath === "/"
      ? true
      : false;

  return (
    <SessionProvider session={session}>
      {!isHome && <Navbar />}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
