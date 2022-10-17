import ArticleList from "../components/ArticleList";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

export default function News({ articles }) {
  return (
    <div>
      <h1>Latest Football News</h1>
      <ArticleList articles={articles} />
      {/* <p>This is an article.</p> */}
    </div>
  );
}

export const getStaticProps = async () => {
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts?_limit=6"
  // );
  // const articles = await res.json();

  // return {
  //   props: { articles },
  // };
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=premier+league&from=2022-10-17&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
  );

  const { articles } = await res.json();

  const limitedArticles = articles.slice(0, 10);

  let urlImages = [];
  const getWithForOf = async () => {
    for (const article of limitedArticles) {
      let urlImage = await getLinkPreview(`${article.url}`);
      urlImages.push(urlImage.images[0]);
    }
    return urlImages;
  };
  urlImages = await getWithForOf();

  limitedArticles.map((article, i) => (article.image = urlImages[i]));

  return {
    props: { articles: limitedArticles },
  };
};
