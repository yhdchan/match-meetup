import ArticleList from "../components/ArticleList";
import { getLinkPreview } from "link-preview-js";

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
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=premier+league&from=${currentDate}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
  );

  const { articles } = await res.json();

  const limitedArticles = articles.slice(0, 10);

  let urlImages = [];
  const getImageUrl = async () => {
    for (const article of limitedArticles) {
      let urlImage = await getLinkPreview(`${article.url}`);
      urlImages.push(urlImage.images[0]);
    }
    return urlImages;
  };
  urlImages = await getImageUrl();

  limitedArticles.map((article, i) => (article.image = urlImages[i]));

  return {
    props: { articles: limitedArticles },
  };
};
