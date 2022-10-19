import ArticleList from "../components/ArticleList";
import { getLinkPreview } from "link-preview-js";

export default function News({ articles }) {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Latest Football News
          </h1>
        </div>
      </header>
      <ArticleList articles={articles} />
      {/* <p>This is an article.</p> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=premier+league&from=${currentDate}&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
  );

  const { articles } = await res.json();

  const limitedArticles = articles.slice(0, 10);

  let urlImages = [];
  const getImageUrl = async () => {
    for (const article of limitedArticles) {
      const urlImage = await getLinkPreview(`${article.url}`);
      urlImages.push(urlImage.images[0]);
    }
    return urlImages;
  };
  urlImages = await getImageUrl();

  limitedArticles.map((article, i) => {
    if (urlImages[i] !== undefined) {
      article.image = urlImages[i];
    } else {
      article.image = "";
    }
  });

  return {
    props: { articles: limitedArticles },
  };
};
