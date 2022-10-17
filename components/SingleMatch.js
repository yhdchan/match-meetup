import React from "react";
import singleMatchStyles from "../styles/SingleMatch.module.css";

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
  let month = monthObj[dateArr[1]];
  let hour_12 = time.split(":")[0] < 12 ? time + "AM" : time + "PM";

  console.log(hour_12);

  const googleMapUrl = `https://maps.google.com/maps?q=${match.pitch.address}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section>
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold tracking-tight text-gray-900 lg:text-3xl">
          {day} {hour_12} {match.pitch.name}
        </h1>
      </div>
      <div className={`${singleMatchStyles.flex_container} mx-4`}>
        <div className="flex sm:w-screen p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div id="matchDetails" className="flex px-4 py-6 sm:px-0">
            <div className="h-96">
              <div>
                <h2>Match Details:</h2>
              </div>
              <div>
                <p>
                  {day}, {month} {dateArr[2]}, {dateArr[0]}
                </p>
                <p>{hour_12}</p>
                <p>{match.pitch.name}</p>
                <p>{match.pitch.address}</p>
              </div>
              <iframe
                width="400"
                height="250"
                id="gmap_canvas"
                src={googleMapUrl}
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex sm:w-screen p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div id="matchPlayers" className="px-4 py-6 sm:px-0">
            <div className="h-96">
              <div>
                <h2>Lineup</h2>
              </div>
              <div className="flex justify-evenly space-x-4 mx-auto">
                <div className="order border-gray-200 shadow-md w-full">
                  <h3>Home</h3>
                  {match.homePlayers.map((player) => {
                    return <p>{player.username}</p>;
                  })}
                </div>
                <div className="order border-gray-200 shadow-md w-full">
                  <h3>Away</h3>
                  {match.awayPlayers.map((player) => {
                    return <p>{player.username}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
