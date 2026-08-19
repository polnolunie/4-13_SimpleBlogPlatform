import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Loader from "../components/LoaderContainer";

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

  if (!article) return <Loader />;

  return (
    <div>
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.description}</ReactMarkdown>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </div>
  );
}

export default ArticlePage;
