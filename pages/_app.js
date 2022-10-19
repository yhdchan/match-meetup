import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "../contexts/User";

function MyApp({ Component, pageProps, session }) {
  const { asPath } = useRouter();
  const isHome =
    /(\/\#|\/login|\/logout|\/signup)/g.test(asPath) || asPath === "/"
      ? true
      : false;

  return (
    <UserProvider>
      <SessionProvider session={session}>
        <ThemeProvider enableSystem={true} attribute="class">
          <>
            {!isHome && <Navbar />}
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </SessionProvider>
    </UserProvider>
  );
}

export default MyApp;
