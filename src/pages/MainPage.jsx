import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import Loader from "../components/LoaderContainer";
import ErrorGlobal from "../error/Error";

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
      <h1>Articles</h1>

      {articles.map((article) => (
        <div key={article.slug}>
          <Link to={`/articles/${article.slug}`}>
            <h2>{article.title}</h2>
          </Link>
          <p>{article.description}</p>
          <button disabled>Like</button>
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

export default MAinPage;
