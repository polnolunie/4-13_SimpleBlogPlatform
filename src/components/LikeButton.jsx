import { useState } from "react";
import Button from "./buttons";

const API_URL = "https://realworld.habsida.net/api";

function LikeButton({ slug, count, favorited }) {
  const [liked, setLiked] = useState(favorited);
  const [likesCount, setLikesCount] = useState(count);

  const handleLike = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/articles/${slug}/favorite`,
        {
          method: liked ? "DELETE" : "POST",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to change like");
      }

      const result = await response.json();

      setLiked(result.article.favorited);
      setLikesCount(result.article.favoritesCount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      className="like-button"
      onClick={handleLike}
    >
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.65625 12.2188L5.6875 11.3438C4.58333 10.3438 3.78125 9.60417 3.28125 9.125C2.78125 8.64583 2.21875 8.05208 1.59375 7.34375C0.989583 6.63542 0.572917 6 0.34375 5.4375C0.114583 4.85417 0 4.26042 0 3.65625C0 2.63542 0.34375 1.77083 1.03125 1.0625C1.73958 0.354167 2.61458 0 3.65625 0C4.86458 0 5.86458 0.46875 6.65625 1.40625C7.44792 0.46875 8.44792 0 9.65625 0C10.6979 0 11.5625 0.354167 12.25 1.0625C12.9583 1.77083 13.3125 2.63542 13.3125 3.65625C13.3125 4.46875 13.0417 5.3125 12.5 6.1875C11.9583 7.0625 11.3646 7.82292 10.7188 8.46875C10.0938 9.11458 9.0625 10.0833 7.625 11.375L6.65625 12.2188Z"
          fill="#61BB61"
        />
      </svg>

      {likesCount}
    </Button>
  );
}

export default LikeButton;