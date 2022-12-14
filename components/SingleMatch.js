import React from "react";
import singleMatchStyles from "../styles/SingleMatch.module.css";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";

const dayObj = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const monthObj = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export default function SingleMatch({ match }) {
  const dateArr = match.date
    .slice(0, 16)
    .replace("T", " ")
    .split(" ")[0]
    .split("-");
  const time = match.date.slice(0, 16).replace("T", " ").split(" ")[1];
  const d = new Date(match.date);
  let day = dayObj[d.getDay()];
  let month = monthObj[+dateArr[1]];
  let hour_12 = time.split(":")[0] < 12 ? time + "AM" : time + "PM";
  // console.log(document.cookie, "<--- cookie");
  const { loggedInUser } = useContext(UserContext);

  const des = match.pitch.description.split(".");

  const creator_avatar = match.created_by_username[0].img
    ? match.created_by_username[0].img
    : "/images/player_avatar/default_avatar.jpeg";

  // console.log(loggedInUser);
  // console.log(match, "<--- match");
  const [isJoin, setIsJoin] = useState(false);
  const [joinIndex, setJoinIndex] = useState(0);
  const [joinTeam, setJoinTeam] = useState("");
  let [numberOfHomePlayer, setNumberOfHomePlayer] = useState(
    match.homePlayers.length
  );

  const handleJoinHomeTeam = async (e) => {
    console.log(e.target.parentNode);
    try {
      e.preventDefault();
      setIsJoin(!isJoin);
      setJoinTeam("home");
      setJoinIndex(e.target.parentNode.id * 1);
      setNumberOfHomePlayer((curr) => curr + 1);
      // await fetch(
      //   `/api/matches/addMatch?match_id=${match._id}&_id=${loggedInUser._id.$oid}&side=${joinTeam}`,
      //   {
      //     method: "PATCH",
      //     headers: { "Content-type": "application/json" },
      //     body: JSON.stringify({
      //       match_id: match._id,
      //       _id: loggedInUser._id.$oid,
      //       side: joinTeam,
      //     }),
      //   }
      // );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(isJoin, joinTeam);
  console.log(match._id, loggedInUser._id.$oid, joinTeam);

  return (
    <section>
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          {day} {hour_12} {match.pitch.name}
        </h1>
      </div>
      <div className={`${singleMatchStyles.flex_container} mx-4`}>
        <div className={`${singleMatchStyles.flex_box} h-full`}>
          <div className="overflow-hidden bg-white shadow-md sm:rounded-lg">
            <div className="px-4 py-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Match Details:
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <div>
                <div className="flex bg-gray-100 px-4 py-5">
                  <CalendarIcon className="block h-6 w-6 mr-2" />
                  <p className="font-medium text-gray-700">
                    {day}, {dateArr[2]} {month}, {dateArr[0]}
                  </p>
                </div>
                <div className="flex bg-white px-4 py-5">
                  <ClockIcon className="block h-6 w-6 mr-2" />
                  <p className="font-medium text-gray-700">{hour_12}</p>
                </div>
                <div className="flex bg-gray-100 px-4 py-5">
                  <MapPinIcon className="block h-6 w-6 mr-2 my-auto" />
                  <div className="grid gap-2">
                    <p className="text-sm font-medium text-gray-700">
                      {match.pitch.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 col-span-2 mt-0">
                      {match.pitch.address}
                    </p>
                  </div>
                </div>
                <iframe
                  src={`https://maps.google.com/maps?q=${match.pitch.address}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-2 m-0"
                ></iframe>
                <div className="flex bg-white px-4 py-5">
                  <img
                    src={creator_avatar}
                    className="block h-6 w-6 mr-2 my-auto h-8 w-8 rounded-full"
                  />
                  <div className="grid">
                    <p className="text-sm bg-white font-medium text-gray-700">
                      Created by
                    </p>
                    <p className="mt-1 text-sm text-gray-500 col-span-2 mt-0">
                      {match.created_by_username[0].username}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 px-4 py-5">
                  <dt className="font-medium text-gray-700">Pitch Info</dt>
                  <dd className="mt-1 text-sm text-gray-500">
                    Contact Number: {match.pitch.contactNumber}
                  </dd>
                  <dd className="mt-1 text-sm text-gray-500">
                    Surface: {match.pitch.surface}
                  </dd>
                  <dt className="font-medium mt-1 text-sm text-gray-500 mt-0">
                    Facilities
                  </dt>
                  {match.pitch.freeParking && (
                    <dd className="mt-1 text-sm text-gray-500">
                      - Free Parking
                    </dd>
                  )}
                  {match.pitch.goals && (
                    <dd className="mt-1 text-sm text-gray-500">- Goals</dd>
                  )}
                  {match.pitch.lighting && (
                    <dd className="mt-1 text-sm text-gray-500">- Lighting</dd>
                  )}
                  {match.pitch.changingRooms && (
                    <dd className="mt-1 text-sm text-gray-500">
                      - Changing Rooms
                    </dd>
                  )}
                  {match.pitch.toilets && (
                    <dd className="mt-1 text-sm text-gray-500">- Toilets</dd>
                  )}
                </div>
                <div className="bg-white px-4 py-5">
                  <dt className="font-medium text-gray-700">Description</dt>
                  <dd className="mt-1 text-sm text-gray-500 mt-0">
                    <ul>
                      {des.map((d) => {
                        return <li key={d}>- {d}</li>;
                      })}
                    </ul>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${singleMatchStyles.flex_box} h-full`}>
          <div className="overflow-hidden bg-gray-100 shadow-md sm:rounded-lg h-full">
            <div className="px-4 py-5 bg-white">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Lineup:
              </h3>
            </div>
            <div className="flex flex-row border-t border-gray-200 bg-gray-100">
              <div className="px-4 py-5 w-1/2">
                <dt className="font-bold text-gray-700 pb-2 tracking-wide">
                  Home ( {numberOfHomePlayer} / 5 )
                </dt>
                <dd className="mt-1 text-md text-gray-700">
                  {match.homePlayers.map((player) => {
                    const avatar = player.img
                      ? player.img
                      : "/images/player_avatar/default_avatar.jpeg";
                    return (
                      <div key={player._id} className="flex bg-gray-100 ">
                        <div className="py-3 pr-2">
                          <img
                            src={avatar}
                            className="h-8 w-8 rounded-full"
                          ></img>
                        </div>
                        <div className="py-1">
                          <p>{player.username}</p>
                          <p className="text-sm text-gray-500">
                            {player.position}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {match.homePlayers.length < 5 && (
                    <div>
                      {isJoin && joinIndex === 1 ? (
                        <div
                          key={loggedInUser._id.$oid}
                          className="flex bg-gray-100 "
                        >
                          <div className="py-3 pr-2">
                            <img
                              src={loggedInUser.img}
                              onClick={() => {
                                setIsJoin(!isJoin);
                                setJoinTeam("");
                                setJoinIndex(0);
                                setNumberOfHomePlayer((curr) => curr - 1);
                              }}
                              className="h-8 w-8 rounded-full cursor-pointer"
                            ></img>
                          </div>
                          <div className="py-1">
                            <p>{loggedInUser.username}</p>
                            <p className="text-sm text-gray-500">
                              {loggedInUser.position}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex bg-gray-100 ">
                          <button
                            className="py-3 pr-2"
                            id="1"
                            onClick={(e) => handleJoinHomeTeam(e)}
                          >
                            {
                              <PlusCircleIcon className="block h-8 w-8 my-auto" />
                            }
                          </button>
                          <div className="py-1">
                            <p>Available</p>
                            <p className="text-sm text-gray-500">Join Match</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {match.homePlayers.length < 4 && (
                    <div>
                      {isJoin && joinIndex === 2 ? (
                        <div
                          key={loggedInUser._id.$oid}
                          className="flex bg-gray-100 "
                        >
                          <div className="py-3 pr-2">
                            <img
                              src={loggedInUser.img}
                              onClick={() => {
                                setIsJoin(!isJoin);
                                setJoinTeam("");
                                setJoinIndex(0);
                                setNumberOfHomePlayer((curr) => curr - 1);
                                {
                                  numberOfHomePlayer++;
                                }
                              }}
                              className="h-8 w-8 rounded-full cursor-pointer"
                            ></img>
                          </div>
                          <div className="py-1">
                            <p>{loggedInUser.username}</p>
                            <p className="text-sm text-gray-500">
                              {loggedInUser.position}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex bg-gray-100 ">
                          <button
                            className="py-3 pr-2"
                            id="2"
                            onClick={(e) => handleJoinHomeTeam(e)}
                          >
                            {
                              <PlusCircleIcon className="block h-8 w-8 my-auto" />
                            }
                          </button>
                          <div className="py-1">
                            <p>Available</p>
                            <p className="text-sm text-gray-500">Join Match</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {match.homePlayers.length < 3 && (
                    <div>
                      {isJoin && joinIndex === 3 ? (
                        <div
                          key={loggedInUser._id.$oid}
                          className="flex bg-gray-100 "
                        >
                          <div className="py-3 pr-2">
                            <img
                              src={loggedInUser.img}
                              onClick={() => {
                                setIsJoin(!isJoin);
                                setJoinTeam("");
                                setJoinIndex(0);
                                setNumberOfHomePlayer((curr) => curr - 1);
                              }}
                              className="h-8 w-8 rounded-full cursor-pointer"
                            ></img>
                          </div>
                          <div className="py-1">
                            <p>{loggedInUser.username}</p>
                            <p className="text-sm text-gray-500">
                              {loggedInUser.position}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex bg-gray-100 ">
                          <button
                            className="py-3 pr-2"
                            id="3"
                            onClick={(e) => handleJoinHomeTeam(e)}
                          >
                            {
                              <PlusCircleIcon className="block h-8 w-8 my-auto" />
                            }
                          </button>
                          <div className="py-1">
                            <p>Available</p>
                            <p className="text-sm text-gray-500">Join Match</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {match.homePlayers.length < 2 && (
                    <div className="flex bg-gray-100 ">
                      <button className="py-3 pr-2">
                        <PlusCircleIcon className="block h-8 w-8 my-auto" />
                      </button>
                      <div className="py-1">
                        <p>Available</p>
                        <p className="text-sm text-gray-500">Join Match</p>
                      </div>
                    </div>
                  )}
                  {match.homePlayers.length < 1 && (
                    <div className="flex bg-gray-100 ">
                      <button className="py-3 pr-2">
                        <PlusCircleIcon className="block h-8 w-8 my-auto" />
                      </button>
                      <div className="py-1">
                        <p>Available</p>
                        <p className="text-sm text-gray-500">Join Match</p>
                      </div>
                    </div>
                  )}
                </dd>
              </div>
              <div className="px-4 py-5 w-1/2">
                <dt className="font-bold text-gray-700 pb-2 tracking-wide">
                  Away ( {match.awayPlayers.length} / 5 )
                </dt>
                <dd className="mt-1 text-md text-gray-700">
                  {match.awayPlayers.map((player) => {
                    const avatar = player.img
                      ? player.img
                      : "/images/player_avatar/default_avatar.jpeg";
                    return (
                      <div key={player._id} className="flex bg-gray-100 ">
                        <div className="py-3 pr-2">
                          <img
                            src={avatar}
                            className="h-8 w-8 rounded-full"
                          ></img>
                        </div>
                        <div className="py-1">
                          <p>{player.username}</p>
                          <p className="text-sm text-gray-500">
                            {player.position}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {match.awayPlayers.length < 5 && (
                    <div className="flex bg-gray-100 ">
                      <button className="py-3 pr-2">
                        <PlusCircleIcon className="block h-8 w-8 my-auto" />
                      </button>
                      <div className="py-1">
                        <p>Available</p>
                        <p className="text-sm text-gray-500">Join Match</p>
                      </div>
                    </div>
                  )}
                  {match.awayPlayers.length < 4 && (
                    <div className="flex bg-gray-100 ">
                      <button className="py-3 pr-2">
                        <PlusCircleIcon className="block h-8 w-8 my-auto" />
                      </button>
                      <div className="py-1">
                        <p>Available</p>
                        <p className="text-sm text-gray-500">Join Match</p>
                      </div>
                    </div>
                  )}
                  {match.awayPlayers.length < 3 && (
                    <div className="flex bg-gray-100 ">
                      <button className="py-3 pr-2">
                        <PlusCircleIcon className="block h-8 w-8 my-auto" />
                      </button>
                      <div className="py-1">
                        <p>Available</p>
                        <p className="text-sm text-gray-500">Join Match</p>
                      </div>
                    </div>
                  )}
                  {match.awayPlayers.length < 2 && (
                    <div className="flex bg-gray-100 ">
                      <button className="py-3 pr-2">
                        <PlusCircleIcon className="block h-8 w-8 my-auto" />
                      </button>
                      <div className="py-1">
                        <p>Available</p>
                        <p className="text-sm text-gray-500">Join Match</p>
                      </div>
                    </div>
                  )}
                  {match.awayPlayers.length < 1 && (
                    <div className="flex bg-gray-100 ">
                      <button className="py-3 pr-2">
                        <PlusCircleIcon className="block h-8 w-8 my-auto" />
                      </button>
                      <div className="py-1">
                        <p>Available</p>
                        <p className="text-sm text-gray-500">Join Match</p>
                      </div>
                    </div>
                  )}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
