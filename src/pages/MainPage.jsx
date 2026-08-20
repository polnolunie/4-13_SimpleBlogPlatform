import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import Loader from "../components/LoaderContainer";
import ErrorGlobal from "../error/Error";
import DefaultBanner from "../components/Banner/Default";
import Button from "../components/buttons";
import PopularTags from "../components/PopularTags";
import Tag from "../components/Tag";
import "./MainPage.css";

const API_URL = "https://realworld.habsida.net/api";

function MainPage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const totalPages = Math.ceil(articlesCount / 10);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${API_URL}/articles?limit=10&offset=${(currentPage - 1) * 10}`,
        );

        if (!response.ok) {
          throw new Error("Failed to load articles");
        }

        const data = await response.json();
        setArticles(data.articles);
        setArticlesCount(data.articlesCount);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorGlobal message={error} />;
  }

  return (
    <div>
      <DefaultBanner />
      <PopularTags />

      {articles.map((article) => (
        <div className="mainPage_article__container" key={article.slug}>
          <div className="mainPage_article__top">
            <Link to={`/articles/${article.slug}`}>
              <h2 className="mainPage_article__header">{article.title}</h2>
            </Link>
            <Button className="like-button">
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.65625 12.2188L5.6875 11.3438C4.58333 10.3438 3.78125 9.60417 3.28125 9.125C2.78125 8.64583 2.21875 8.05208 1.59375 7.34375C0.989583 6.63542 0.572917 6 0.34375 5.4375C0.114583 4.85417 0 4.26042 0 3.65625C0 2.63542 0.34375 1.77083 1.03125 1.0625C1.73958 0.354167 2.61458 0 3.65625 0C4.86458 0 5.86458 0.46875 6.65625 1.40625C7.44792 0.46875 8.44792 0 9.65625 0C10.6979 0 11.5625 0.354167 12.25 1.0625C12.9583 1.77083 13.3125 2.63542 13.3125 3.65625C13.3125 4.46875 13.0417 5.3125 12.5 6.1875C11.9583 7.0625 11.3646 7.82292 10.7188 8.46875C10.0938 9.11458 9.0625 10.0833 7.625 11.375L6.65625 12.2188Z" fill="#61BB61"/>
</svg>

 {article.favoritesCount}
</Button>
          </div>
          <p>{article.description}</p>
    
          <div className="article-tags">
        {article.tagList.map((tag) => (
  <Tag key={tag}>{tag}</Tag>
))}
        </div>

        </div>
      ))}

      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default MainPage;
