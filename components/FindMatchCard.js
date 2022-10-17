import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

export default function FindMatchCard({ match }) {
  const time = match.date.slice(0, 16).replace("T", " ");

  return (
    <Link href="/find-match/[_id]" as={`/find-match/${match._id}`}>
      <a className={articleStyles.card}>
        <h2>Date:{time}</h2>
        <h2>Pitch:{match.pitch.name}</h2>
      </a>
    </Link>
  );
}

// const time = match.date.slice(0, 16).replace("T", " ");
// return (
//   <div>
//     Date:{time}
//     <br />
//     Pitch:{match.pitch.name}
//   </div>
// );

// return (
//   <div className={articleStyles.grid}>
//     {articles.map((article) => (
//       <ArticleItem article={article} />
//       // <h3>{article.title}</h3>
//     ))}
//   </div>
// );
