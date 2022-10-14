import React from "react";

const signup = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5 bg-[url('/images/home-cover.jpg')]"></div>

        <div className="flex items-center w-full max-w-3xl pt-10 p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Sign up
            </h1>

            <p className="mt-6 text-gray-500 sm:text-lg md:text-xl dark:text-gray-400">
              Create your personal account and begin match meetup
            </p>

            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>

              <div>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
                <p className="text-gray-500 text-sm pl-2">
                  You can use letters, numbers, periods, underscores & dashes
                </p>
              </div>

              <div>
                <input
                  id="postcode"
                  type="text"
                  placeholder="Postcode"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
                <p className="text-gray-500 text-sm pl-2">
                  Use your valid email address
                </p>
              </div>

              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
                <p className="text-gray-500 text-sm pl-2">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>

              <div>
                <input
                  id="comfirmedPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
                <p className="text-gray-500 text-sm pl-2">
                  Comfirm your password
                </p>
              </div>

              <button
                type="submit"
                // onSubmit={}
                className="flex items-center justify-between w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>Sign Up </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
            <div className="text-sm text-grey-500 my-8 pl-2">
              By signing up, you agree to the{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-500"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-500"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <p className="mt-3 text-base text-gray-500 pl-2 sm:text-lg md:text-xl">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-900 focus:text-blue-900 transition duration-200 ease-in-out"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
