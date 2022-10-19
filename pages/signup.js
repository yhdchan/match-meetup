import { useState } from "react";
import { useForm } from "react-hook-form";

const signup = () => {
  const [newPlayer, setNewPlayer] = useState({
    username: "",
    firstName: "",
    lastName: "",
    postCode: "",
    email: "",
    password: "",
    position: "",
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendToDb = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch("/api/players/addPlayer", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newPlayer),
      });
      // Do something when user sign up successfully
      const data = await res.json();
    } catch (error) {
      // Do something when error
      // res.json({ error });
    }
  };
  const onSubmit = (data) => sendToDb(data);

  const handleChange = (event) => {
    event.preventDefault();
    setNewPlayer({ ...newPlayer, [event.target.id]: event.target.value });
  };

  return (
    <section className="bg-inherit">
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5 bg-[url('/images/home-cover.jpg')]"></div>

        <div className="flex items-center w-full max-w-3xl pt-10 p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-3xl font-bold tracking-tight text-inherit sm:text-4xl md:text-5xl">
              Sign up
            </h1>

            <p className="mt-6 text-gray-500 sm:text-lg md:text-xl dark:text-gray-400">
              Create your personal account to join match meetup!
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
                <input
                  id="firstName"
                  type="text"
                  onBlur={handleChange}
                  placeholder="First name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z\s]*$/g,
                  })}
                />
                {errors.firstName?.type === "required" &&
                  "● First name is required"}
                {errors.firstName?.type === "pattern" &&
                  "● Must only contain letters"}
              </div>

              <div>
                <input
                  id="lastName"
                  type="text"
                  onChange={handleChange}
                  placeholder="Last name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z\s]*$/g,
                  })}
                />
                {errors.lastName?.type === "required" &&
                  "● Last name is required"}
                {errors.lastName?.type === "pattern" &&
                  "● Must only contain letters"}
              </div>

              <div>
                <input
                  id="username"
                  type="text"
                  onChange={handleChange}
                  placeholder="Username"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("username", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                {errors.username?.type === "required" &&
                  "● You must create a username"}
                {errors.username?.type === "minLength" &&
                  "● Must contain 6 or more characters"}
                {errors.username?.type === "maxLength" &&
                  "● Must not contain more than 20 characters"}
                <p className="text-gray-500 text-sm pl-2"></p>
              </div>

              <div>
                <input
                  id="postCode"
                  type="text"
                  onBlur={handleChange}
                  placeholder="Post code"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  {...register("postCode", {
                    required: true,
                    pattern:
                      /^([A-Z][A-HJ-Y]?[0-9][A-Z0-9]? ?[0-9][A-Z]{2}|GIR ?0A{2})$/gim,
                  })}
                />
                {errors.postCode?.type === "required" &&
                  "● Post code is required"}
                {errors.postCode?.type === "pattern" && "● Invalid Post code"}
              </div>

              <div>
                <select
                  id="position"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={handleChange}
                  placeholder="Position"
                  {...register("position", {
                    required: true,
                  })}
                >
                  <option value="1">Goalkeeper</option>
                  <option value="2">Defender</option>
                  <option value="3">Midfielder</option>
                  <option value="4">Attacker</option>
                </select>
                {errors.position?.type === "required" &&
                  "● Position is required"}
                {errors.position?.type === "pattern" &&
                  "● Position must be either: goalkeeper, defender, midfielder or attacker"}
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="johnsnow@example.com"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gim,
                  })}
                />
                {errors.email?.type === "required" && "● Email is required"}
                {errors.email?.type === "pattern" && "● Invalid email address"}
                <p className="text-gray-500 text-sm pl-2">
                  You must have access to the email address
                </p>
              </div>

              <div>
                <input
                  id="password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.password?.type === "required" &&
                  "● You must create a password"}
                {errors.password?.type === "minLength" &&
                  "● Must contain 8 or more characters"}
                <p className="text-gray-500 text-sm pl-2">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>

              <div>
                <input
                  id="comfirmPassword"
                  type="password"
                  // onChange={handleChange}
                  placeholder="Confirm Password"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
                <p className="text-gray-500 text-sm pl-2"></p>
              </div>

              <button
                type="submit"
                // onSubmit={handleSubmit}
                onClick={handleSubmit}
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
