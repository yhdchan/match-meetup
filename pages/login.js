import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  const handleLogin = () => {
    push("/players");
  };

  if (status === "authenticated") {
    setTimeout(() => {
      sessionStorage.setItem("user", JSON.stringify(session.user));
      // sessionStorage.setItem("name", session.user.name);
      // sessionStorage.setItem("email", session.user.email);
      // sessionStorage.setItem("imageURL", session.user.image);
      push("/find-match");
    }, 1000);

    return (
      <h1 className="relative flex items-center font-bold justify-center h-screen sm:text-lg md:text-xl lg:text-3xl xl:text-5xl">
        Welcome back, {session.user.name}
      </h1>
    );
  }

  const handleOAuthSignIn = () => {
    signIn("google");
  };

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl h-full">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 h-full">
            <main className="mx-auto pt-10 max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                  <span className="block xl:inline">Sign in </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-blue-600 hover:text-blue-900 focus:text-blue-900 transition duration-200 ease-in-out"
                  >
                    Sign up
                  </a>
                </p>
                <form>
                  <div className="my-6">
                    <input
                      type="text"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 focus:ring-blue-500 focus:ring-2 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="checkRemember"
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="checkRemember"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-red-600">
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        type="submit"
                        onClick={handleLogin}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleOAuthSignIn}
                    className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:border-gray-900 hover:bg-gray-100 text-xl font-normal text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                  >
                    <svg
                      className="w-4 mr-2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#EA4335"
                        d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                      />
                      <path
                        fill="#34A853"
                        d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                      />
                    </svg>
                    <span>Sign in with Google</span>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 sm:mt-16 md:h-96 lg:h-full lg:w-full lg:mt-0"
            src="/images/home-cover.jpg"
            alt="teammate"
          />
        </div>
      </div>
    </>
  );
};

export default login;
