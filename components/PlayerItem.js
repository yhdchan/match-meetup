import playersListStyles from "../styles/PlayersList.module.css";

export default function SinglePlayer({ player }) {
  const avatar = player.img
    ? player.img
    : "/images/player_avatar/default_avatar.jpeg";

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
      <div className="w-full mt-4">
        <button
          onClick={() => setLoggedInUser(player)}
          className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg"
        >
          That's me!
        </button>
      </div>
    </div>
  );
}
