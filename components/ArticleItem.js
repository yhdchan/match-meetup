import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

export default function ArticleItem({ article }) {
  const date = article.publishedAt.slice(0, 16).replace("T", " ");
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h5>{date}</h5>
        <h2>{article.title}</h2>
        <img src={article.image}></img>
      </a>
    </Link>
  );
}
