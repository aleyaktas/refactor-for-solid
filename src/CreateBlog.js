import { useState } from "react";
import { useHistory } from "react-router";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    fetch("https://blogger-rolify-api.herokuapp.com/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/blogger-react-app/");
    });
  };

  return (
    <div className="create-blog">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          rows="7"
          type="text"
          placeholder="Body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author:</label>
        <input
          type="text"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
