import PlayerItem from "./PlayerItem";
import playersListStyles from "../styles/PlayersList.module.css";

export default function PlayersList({ players }) {
  return (
    <div className={`${playersListStyles.flex_container} px-6 py-3`}>
      {players.map((player) => (
        <PlayerItem key={player._id} player={player} />
      ))}
    </div>
  );
}
