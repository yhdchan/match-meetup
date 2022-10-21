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
                <img src="images/heart.png" className="h-12 w-12 mb-2" />
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
