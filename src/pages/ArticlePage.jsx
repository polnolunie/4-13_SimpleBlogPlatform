import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Loader from "../components/LoaderContainer";
import Tag from "../components/Tag";
import Button from "../components/buttons";
import "./ArticlePage.css";

const API_URL = "https://realworld.habsida.net/api";

function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`${API_URL}/articles/${slug}`);
      const data = await response.json();

      setArticle(data.article);
    };

    fetchArticle();
  }, [slug]);

  if (!article) {
    return <Loader />;
  }

  return (
    <div className="article-page">

      <div className="article-banner">
        <div className="article-banner-content">

          <h1 className="article_header">
            {article.title}
          </h1>

          <div className="article-author">
          {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="white"/>
<path d="M8.46875 14.0938C9.69792 13.5938 10.875 13.3438 12 13.3438C13.125 13.3438 14.2917 13.5938 15.5 14.0938C16.7292 14.5729 17.3438 15.2083 17.3438 16V17.3438H6.65625V16C6.65625 15.2083 7.26042 14.5729 8.46875 14.0938ZM13.875 11.2188C13.3542 11.7396 12.7292 12 12 12C11.2708 12 10.6458 11.7396 10.125 11.2188C9.60417 10.6979 9.34375 10.0729 9.34375 9.34375C9.34375 8.61458 9.60417 7.98958 10.125 7.46875C10.6458 6.92708 11.2708 6.65625 12 6.65625C12.7292 6.65625 13.3542 6.92708 13.875 7.46875C14.3958 7.98958 14.6562 8.61458 14.6562 9.34375C14.6562 10.0729 14.3958 10.6979 13.875 11.2188Z" fill="#61BB61"/>
</svg>}

            <div>
              <div>{article.author.username}</div>
              <small>
                {new Date(article.createdAt).toLocaleDateString()}
              </small>
            </div>
          </div>

        </div>
      </div>

      <div className="article-content">

        <ReactMarkdown>
          {article.description}
        </ReactMarkdown>

        <ReactMarkdown>
          {article.body}
        </ReactMarkdown>

        <div className="article-tags">
        {article.tagList.map((tag) => (
  <Tag key={tag}>{tag}</Tag>
))}
        </div>

      <div className="article-actions">
  <span className="article-user">
    {<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="white"/>
<path d="M8.46875 14.0938C9.69792 13.5938 10.875 13.3438 12 13.3438C13.125 13.3438 14.2917 13.5938 15.5 14.0938C16.7292 14.5729 17.3438 15.2083 17.3438 16V17.3438H6.65625V16C6.65625 15.2083 7.26042 14.5729 8.46875 14.0938ZM13.875 11.2188C13.3542 11.7396 12.7292 12 12 12C11.2708 12 10.6458 11.7396 10.125 11.2188C9.60417 10.6979 9.34375 10.0729 9.34375 9.34375C9.34375 8.61458 9.60417 7.98958 10.125 7.46875C10.6458 6.92708 11.2708 6.65625 12 6.65625C12.7292 6.65625 13.3542 6.92708 13.875 7.46875C14.3958 7.98958 14.6562 8.61458 14.6562 9.34375C14.6562 10.0729 14.3958 10.6979 13.875 11.2188Z" fill="#61BB61"/>
</svg>}
    UserName
        
          </span>
      <Button className="like-button" label={"Edit"} />
          <Button className="delete-button" label={"Delete"} />
        </div>

      </div>
    </div>
  );
}

export default ArticlePage;