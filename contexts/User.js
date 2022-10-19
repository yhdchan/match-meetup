import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({
    _id: {
      $oid: "6346c576d095dc0c5987396c",
    },
    username: "beckham007",
    password: "25SJ3MahU7",
    firstName: "Kyle",
    lastName: "Naughton",
    postCode: "M331AB",
    email: "beckham007@gmail.com",
    position: "defender",
    img: "/images/player_avatar/beckham007_avatar.jpg",
    motm_count: 0,
  });
  const isLoggedIn = Object.keys(loggedInUser).length > 0;

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
