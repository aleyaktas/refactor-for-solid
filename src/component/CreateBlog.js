import { useState } from "react";
import { useHistory } from "react-router";
import TextInput from "./TextInput";
import { postBlog } from "./fetch";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();
  const blog = { title, body, author };


const handleSubmit = (e) => {
  e.preventDefault();
  postBlog(blog)
  history.push("/blogger-react-app/");
};

  return (
    <div className="create-blog">
      <form onSubmit={handleSubmit}>
        <TextInput placeholder="Title" value={title} onChange={(title) => setTitle(title)} />
        <TextInput isTextArea placeholder="Body" rows="7" value={body} onChange={(body) => setBody(body)} />
        <TextInput placeholder="Author" value={author} onChange={(author) => setAuthor(author)}/>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
