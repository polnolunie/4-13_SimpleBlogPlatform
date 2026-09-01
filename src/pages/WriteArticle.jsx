import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/buttons";
import Tag from "../components/Tag";
import "./WriteArticle.css";

const API_URL = "https://realworld.habsida.net/api";

function WriteArticle() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const token = localStorage.getItem("token");
  const isEdit = Boolean(slug);

  const [tags, setTags] = useState([]);

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`${API_URL}/tags`);
        const data = await response.json();

        setTags(data.tags);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTags();
  }, []);

  useEffect(() => {
    if (!isEdit) return;

    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${API_URL}/articles/${slug}`
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error("Failed to load article");
        }

        setValue("title", result.article.title);
        setValue("description", result.article.description);
        setValue("body", result.article.body);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [isEdit, slug, setValue]);

  const Submitted = async (data) => {
    try {
      const url = isEdit
        ? `${API_URL}/articles/${slug}`
        : `${API_URL}/articles`;

      const response = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          article: {
            title: data.title,
            description: data.description,
            body: data.body,
            ...(isEdit ? {} : { tagList: [] }),
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          Object.entries(result.errors).forEach(
            ([field, messages]) => {
              setError(field, {
                type: "server",
                message: Array.isArray(messages)
                  ? messages.join(", ")
                  : messages,
              });
            }
          );
        }

        return;
      }

      navigate(`/articles/${result.article.slug}`);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <form
      className="write-article-form"
      onSubmit={handleSubmit(Submitted)}
    >
      <h1>{isEdit ? "Edit Article" : "New Article"}</h1>

      <Input
        type="text"
        placeholder="Article Title"
        register={register("title", {
          required: "Title обязателен",
        })}
      />

      {errors.title && (
        <p className="article-error">
          {errors.title.message}
        </p>
      )}

      <Input
        type="text"
        placeholder="What's this article about?"
        register={register("description", {
          required: "Description обязателен",
        })}
      />

      {errors.description && (
        <p className="article-error">
          {errors.description.message}
        </p>
      )}

      <textarea
        className="article-body"
        placeholder="Write your article (in markdown)"
        {...register("body", {
          required: "Body обязателен",
        })}
      />

      {errors.body && (
        <p className="article-error">
          {errors.body.message}
        </p>
      )}

      <div className="article-popular-tags">
        {tags.slice(0, 5).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <Button
        type="submit"
        className="profile-button"
        label={isEdit ? "Update Article" : "Publish Article"}
      />
    </form>
  );
}

export default WriteArticle;