import ArticleList from "../components/ArticleList";

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
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: { articles },
  };
};
