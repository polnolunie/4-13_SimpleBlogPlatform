import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import Loader from "../components/LoaderContainer";
import ErrorGlobal from "../error/Error";
import Author from "../components/Author";
import LikeButton from "../components/LikeButton";
import Tag from "../components/Tag";
import "./ProfilePage.css";

const API_URL = "https://realworld.habsida.net/api";

function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalPages = Math.ceil(articlesCount / 10);

  useEffect(() => {
    if (!user?.username) return;

    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${API_URL}/articles?author=${encodeURIComponent(
            user.username
          )}&limit=10&offset=${(currentPage - 1) * 10}`
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
  }, [currentPage, user?.username]);

  if (!user) {
    return <ErrorGlobal message="You need to sign in" />;
  }

  return (
    <div className="profile-page">
      <div className="profile-banner">
        {user.image ? (
          <img
            className="profile-banner-avatar"
            src={user.image}
            alt={user.username}
          />
        ) : (
          <div className="profile-banner-avatar profile-no-avatar">
            {user.username?.[0]?.toUpperCase()}
          </div>
        )}

        <h1>{user.username}</h1>
      </div>

      <div className="profile-content">
        <div className="profile-tabs">
          <div className="profile-tab active">
            My Articles
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorGlobal message={error} />
        ) : articles.length === 0 ? (
          <p className="profile-empty">
            You haven't published any articles yet.
          </p>
        ) : (
          <>
            {articles.map((article) => (
              <div
                className="profile-article"
                key={article.slug}
              >
                <div className="profile-article-top">
                  <Author
                    author={article.author}
                    createdAt={article.createdAt}
                  />

                  <LikeButton
                    count={article.favoritesCount}
                  />
                </div>

                <Link to={`/articles/${article.slug}`}>
                  <h2>{article.title}</h2>
                </Link>

                <p>{article.description}</p>

                <div className="profile-tags">
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
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;