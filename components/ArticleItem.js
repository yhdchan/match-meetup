import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

export default function ArticleItem({ article }) {
  return (
    // <Link href="/article/[id]" as={`/article/${article.id}`}>
    //   <a className={articleStyles.card}>
    //     <h3>{article.title}</h3>
    //     <p>{article.body}</p>
    //   </a>
    // </Link>
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h5>{article.publishedAt}</h5>
        <h2>{article.title}</h2>
        <img src={article.image}></img>
      </a>
    </Link>
  );
}
