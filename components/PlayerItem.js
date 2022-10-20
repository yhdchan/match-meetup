import { useRouter } from "next/router";
import playersListStyles from "../styles/PlayersList.module.css";

export default function SinglePlayer({ player }) {
  const router = useRouter();
  const avatar = player.img
    ? player.img
    : "/images/player_avatar/default_avatar.jpeg";

  const handleClick = () => {
    router.push(`/players/${player.username}`);
  };

  return (
    <div
      className={`${playersListStyles.flex_box} bg-gray-800 flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64 md:w-64 lg:w-64`}
    >
      <div className="profile mx-auto  py-2 w-16 ">
        <a href={`/players/${player.username}`}>
          <img
            className="h-16 w-16 rounded-full object-contain bg-white"
            src={avatar}
            alt="profile"
          />
        </a>
      </div>

      <div className="username text-blue-500">
        <p>@{player.username}</p>
      </div>
      <div className="position text-gray-500 mt-2">
        <p>{player.position}</p>
      </div>
      <div className="flex w-full flex-row justify-center space-x-6">
        <div className="motm_count text-gray-500 mt-2">
          <div>
            {player.motm_count > 0 ? (
              <div className="flex flex-col">
                <img src="images/motm.png" className="h-16 w-16" />
                <p className="text-center">{player.motm_count}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="handShake_count text-gray-500 mt-2">
          <div>
            {player.handShake_count > 0 ? (
              <div>
                <img src="images/handshake.png" className="h-16 w-16" />
                <p className="text-center">{player.handShake_count}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="heart_count text-gray-500 mt-4">
          <div>
            {player.heart_count > 0 ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="red"
                  class="w-14 h-14"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className="text-center">{player.heart_count}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="w-full mt-4 mb-auto">
        <button
          // onClick={() => setLoggedInUser(player)}
          onClick={handleClick}
          className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg"
        >
          Details
        </button>
      </div>
    </div>
  );
}
