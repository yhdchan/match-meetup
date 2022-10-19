import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <div className={`${articleStyles.flex_container} m-2`}>
      {articles.map((article, index) => (
        <ArticleItem key={index} article={article} />
        // <h3>{article.title}</h3>
      ))}
    </div>
  );
}
