import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Loader from "../components/LoaderContainer";
import Tag from "../components/Tag";
import Button from "../components/buttons";
import Author from "../components/Author";
import "./ArticlePage.css";

const API_URL = "https://realworld.habsida.net/api";

function ArticlePage() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem("user"));

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
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
        <div className="article-actions">

          <Author
            author={article.author}
            createdAt={article.createdAt}
          />
          {isAuthor ? (
            <>
              <Button
                className="like-button"
                label="Edit"
              />

              <Button
                className="delete-button"
                label="Delete"
              />
            </>
          ) : (
            <Button
              className="favorite-button"
              label="Favorite article"
            />
          )}

        </div>

      </div>
    </div>
  );
}

export default ArticlePage;