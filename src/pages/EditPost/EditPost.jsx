import styles from "./EditPost.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument"; 
import { useState, useEffect } from "react";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  console.log(post);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

 
  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setImage(post.image || "");
      setBody(post.body || "");
      setTags(post.tags || []);
    }
  }, [post]);

  return (
    <div>
      <h1>Edit Post</h1>
      {}
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <label>
          Tags:
          <input
            type="text"
            value={tags.join(", ")}
            onChange={(e) => setTags(e.target.value.split(",").map(tag => tag.trim()))}
          />
        </label>
        {formError && <p className="error">{formError}</p>}
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;