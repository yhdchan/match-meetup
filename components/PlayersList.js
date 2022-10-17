import PlayerItem from "./PlayerItem";
import articleStyles from "../styles/Article.module.css";

export default function PlayersList({ players }) {
  return (
    <>
      <h1>Players List</h1>
      <div className={articleStyles.grid}>
        {players.map((player) => (
          <PlayerItem player={player} />
        ))}
      </div>
    </>
  );
}
