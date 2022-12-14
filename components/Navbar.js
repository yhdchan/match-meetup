import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Find Match", href: "/find-match", current: true },
  { name: "Create Match", href: "/create-match", current: false },
  { name: "News", href: "/news", current: false },
  { name: "Players", href: "/players", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { loggedInUser, setLoggedInUser, isLoggedIn } = useContext(UserContext);
  const { data: session } = useSession();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const userNavigation = [
    { name: "Your Profile", href: `/players/${loggedInUser.username}` },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "/logout" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-5 h-5 text-gray-400 hover:text-white"
          role="button"
          // onClick={setTheme("light")}
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5 h-5 text-gray-400 hover:text-white"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  // const [userData, setUserData] = useState(() => {
  //   const user = sessionStorage.getItem("user");
  //   return JSON.parse(user) || null;
  // });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [imageURL, setImageURL] = useState("");

  // useEffect(() => {
  //   setName(sessionStorage.getItem("name"));
  //   setEmail(sessionStorage.getItem("email"));
  //   setImageURL(sessionStorage.getItem("imageURL"));
  // }, []);

  // useEffect(() => {
  //   sessionStorage.getItem("user", JSON.stringify(userData));
  // }, [userData]);
  //   if (session) {
  //     setName(sessionStorage.getItem("name"));
  //     setEmail(sessionStorage.getItem("email"));
  //     setImageURL(sessionStorage.getItem("imageURL"));
  //   }
  //   if (isLoggedIn) {
  //     setName(loggedInUser.username);
  //     setEmail(loggedInUser.email);
  //     setImageURL(loggedInUser.img);
  //   }
  // }, [setLoggedInUser]);

  // const displayName = userData.username ? userData.username : userData.name;
  // const handleClick = (e) => {
  //   console.log(e);
  // };
  let avatar = session ? loggedInUser.image : loggedInUser.img;
  let email = session ? loggedInUser.email : loggedInUser.email;
  let name = session ? loggedInUser.name : loggedInUser.username;
  const { asPath } = useRouter();

  useEffect(() => {
    navigation.forEach((item) => (item.current = false));
    for (let i = 0; i < navigation.length; i++) {
      if (asPath === navigation[i].href) {
        navigation[i].current = true;
      }
    }
  }, [asPath]);

  return (
    <>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className="sticky top-0 z-50 bg-gray-800 text-white"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href="/">
                        <div className="object-scale-down h-12 w-12 cursor-pointer">
                          <img src="/images/icon2.ico" alt="logo" />
                        </div>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <ol className="pr-2">{renderThemeChanger()}</ol>
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={avatar}
                              referrerPolicy="no-referrer"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={avatar}
                        referrerPolicy="no-referrer"
                        alt="profile"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <ol className="pl-1">{renderThemeChanger()}</ol>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
