import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css";
import { Typewriter } from "react-simple-typewriter";
import Head from "next/head";
import { getLinkPreview } from "link-preview-js";

const navigation = [
  { name: "News", href: "#news" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Match Meetup</title>
        <meta name="matchMeetup" content="football, match, meetup" />
      </Head>
      <div className="relative overflow-hidden ">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 dark:bg-gray-900">
            <svg
              className="absolute text-white inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform dark:text-gray-900 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 dark:lg:bg-gray-900">
                <nav
                  className="relative flex items-center justify-between shadow-sm sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="pr-3 flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <Link href="/">
                        <div className="object-scale-down h-12 w-12 pb-2 cursor-pointer">
                          <img src="/images/icon2.ico" alt="logo" />
                        </div>
                      </Link>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-inherit p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4 bg-inherit">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="/signup"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Sign up
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
                    <div className="flex items-center justify-between px-5 pt-4 w-full">
                      <div className="w-1/3">
                        <h1 className="font-bold text-xl cursor-pointer">
                          <span className="text-blue-500">Match Meetup</span>
                        </h1>
                      </div>
                      <div className="w-1/3 justify-self-center">
                        <img
                          className="object-scale-down h-10 w-10 bg-blue-500 rounded-full"
                          src="/images/icon.ico"
                          alt="logo"
                        />
                      </div>
                      <div className="justify-self-end -mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gary-800">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-900 text-gray-500"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="/signup"
                      className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-blue-600 hover:bg-gray-100 dark:bg-gray-700"
                    >
                      Sign up
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-inherit sm:text-5xl md:text-6xl">
                  <span className="block xl:inline text-inherit">
                    Welcome to{" "}
                  </span>{" "}
                  <span className="block text-blue-600 xl:inline">
                    Match Meetup
                  </span>
                </h1>
                <p className="mt-3 text-base text-inherit sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Feel Hunger in Football?
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/login"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72  sm:mt-16 md:h-96 lg:h-full lg:w-full lg:mt-0"
            src="/images/home-cover.jpg"
            alt="teammate"
          />
        </div>
      </div>
      <div id="news" className="h-full w-full">
        <h1 className="text-center font-bold text-4xl pt-16 pb-4">
          Latest Football News
        </h1>
        <div className={homeStyles.container}>
          {articles.map((article, i) => {
            return (
              <Link key={i} href="/article/[id]" as={`/article/${article.id}`}>
                <a
                  href={article.url}
                  target="_blank"
                  className={homeStyles.box}
                >
                  <img
                    src={article.image}
                    alt={article.publishedAt}
                    className="object-fill"
                  />
                  <span>{article.title}</span>
                </a>
              </Link>
            );
          })}
        </div>
        {/* <div className={homeStyles.container}>
          <div className={homeStyles.box}>
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="match1"
            />
            <span>New1</span>
          </div>
          <div className={homeStyles.box}>
            <img
              src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="match2"
            />
            <span>New2</span>
          </div>
          <div className={homeStyles.box}>
            <img
              src="https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="match3"
            />
            <span>New3</span>
          </div>
        </div> */}
      </div>
      <div id="about" className="pb-9">
        <div className="mx-auto mt-1 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 pb-4 mb-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">About Us </span>{" "}
            </h1>
            <h2 className="font-bold tracking-tight text-inherit sm:text-3xl md:text-4xl pt-1">
              What is<span className="text-blue-600"> Match Meetup</span>?
            </h2>
            <p className="mt-3 text-base text-inherit sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Match Meetup is an app to find local football players that you can
              organise games with around your local area.
            </p>
            <p className="pt-3 m-auto">
              <span className="text-blue-600 font-semibold">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={[
                    "Anyone fancy a game this afternoon?",
                    "Yeah!",
                    "What time?",
                  ]}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div id="contact">
        <h2 className="pl-4 font-bold text-center text-4xl font-bold tracking-tight text-inherit sm:text-3xl md:text-4xl">
          Contact Us
        </h2>
        <div className="flex items-center justify-center p-4">
          <div className="mx-auto w-full max-w-[550px]">
            {/* action="https://formbold.com/s/FORM_ID" method="POST" */}
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-inherit"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-gray-300 bg-gray py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-600 focus:shadow-md"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-inherit font-medium text-gray-900 "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-gray-300 bg-gray py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-600 focus:shadow-md"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-inherit"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-gray-300 bg-gray py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-600 focus:shadow-md"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-inherit"
                >
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-gray-300 bg-gray py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-blue-600 focus:shadow-md"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="hover:shadow-form rounded-md bg-blue-600 py-3 p-8 text-base font-semibold text-white outline-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=premier+league&from=${currentDate}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
  );

  const { articles } = await res.json();

  const homeArticles = articles.slice(0, 3);

  let urlImages = [];
  const getImageUrl = async () => {
    for (const article of homeArticles) {
      let urlImage = await getLinkPreview(`${article.url}`);
      urlImages.push(urlImage.images[0]);
    }
    return urlImages;
  };
  urlImages = await getImageUrl();

  homeArticles.map((article, i) => (article.image = urlImages[i]));

  return {
    props: { articles: homeArticles },
  };
};
