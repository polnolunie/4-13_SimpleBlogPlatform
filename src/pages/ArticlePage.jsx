import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../components/LoaderContainer";
import Tag from "../components/Tag";
import Button from "../components/buttons";
import Author from "../components/Author";

import "./ArticlePage.css";

const API_URL = "https://realworld.habsida.net/api";

function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`${API_URL}/articles/${slug}`);

        if (!response.ok) {
          throw new Error("Failed to load article");
        }

        const data = await response.json();
        setArticle(data.article);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [slug]);

  if (!article) {
    return <Loader />;
  }

  const isAuthor =
    currentUser?.username === article.author?.username;

  const handleDelete = async () => {
    try {
      setDeleting(true);

      const response = await fetch(
        `${API_URL}/articles/${slug}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete article");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
      setDeleting(false);
      setShowModal(false);
    }
  };

  return (
    <div className="article-page">
      <div className="article-banner">
        <div className="article-banner-content">
          <h1 className="article_header">
            {article.title}
          </h1>

          <Author
            author={article.author}
            createdAt={article.createdAt}
          />
        </div>
      </div>

      <div className="article-content">
        <ReactMarkdown>
          {article.body}
        </ReactMarkdown>

        <div className="article-tags">
          {article.tagList.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="article-actions">
          <Author
            author={article.author}
            createdAt={article.createdAt}
          />

          {isAuthor ? (
            <div className="article-owner-buttons">
              <Button
                className="like-button edit-button"
                label="Edit"
                onClick={() =>
                  navigate(`/articles/${article.slug}/edit`)
                }
              />

              <Button
                className="delete-button"
                label="Delete"
                onClick={() => setShowModal(true)}
              />
            </div>
          ) : (
            <Button
              className="favorite-button"
              label="Favorite article"
            />
          )}
        </div>
      </div>

      {showModal && (
        <div className="delete-modal-overlay">
          <div className="delete-modal">
            <h2>Delete article?</h2>

            <p>
              Are you sure you want to delete this article?
            </p>

            <div className="delete-modal-buttons">
              <button
                type="button"
                className="modal-cancel"
                onClick={() => setShowModal(false)}
                disabled={deleting}
              >
                Cancel
              </button>

              <button
                type="button"
                className="modal-delete"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;