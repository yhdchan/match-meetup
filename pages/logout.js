import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const logout = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (session) {
    signOut();
  }

  if (status === "unauthenticated") {
    setTimeout(() => {
      sessionStorage.clear();
      push("/");
    }, 1000);

    return (
      <h1 className="relative flex items-center font-bold justify-center h-screen sm:text-lg md:text-xl lg:text-3xl xl:text-5xl">
        You are successfully signed out!
      </h1>
    );
  }
};

export default logout;
