import articleStyles from "../styles/Article.module.css";

export default function ArticleItem({ article }) {
  const date = article.publishedAt.slice(0, 16).replace("T", " ");
  return (
    <div
      className={`${articleStyles.flex_box}  bg-gray-800 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}
    >
      <a href={article.image} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg" src={article.image} alt="article image" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {article.title}
        </h5>
        <p className="mb-3 font-normal text-gray-300">{date}</p>
        <a
          href={article.url}
          target="_blank"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    // <Link href="/article/[id]" as={`/article/${article.id}`}>
    //   <a className={articleStyles.card}>
    //     <h5>{date}</h5>
    //     <h2>{article.title}</h2>
    //     <img src={article.image}></img>
    //   </a>
    // </Link>
  );
}
