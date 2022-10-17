import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

export default function SinglePlayer({ player }) {
  return (
    <Link href="/players/[username]" as={`/players/${player.username}`}>
      <a className={articleStyles.card}>
        <h3>{player.position}</h3>
        <p>{player.username}</p>
      </a>
    </Link>
  );
}
