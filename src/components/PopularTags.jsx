import "./PopularTags.css";
import Tag from "./Tag";
import { useEffect, useState } from "react";

const API_URL = "https://realworld.habsida.net/api";

function PopularTags() {
  const [tags, setTags] = useState([]);

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

  return (
    <div className="populartags_container">
      <h3>Popular Tags</h3>

      <div>
  {tags.slice(0, 5).map((tag) => (
    <Tag key={tag}>{tag} </Tag>
  ))}
</div>
    </div>
  );
}

export default PopularTags;
  