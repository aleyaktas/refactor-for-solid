import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams(); //from bloglist key = blog.id
  const { data: blogs, isPending, error } = useFetch(
    "https://blogger-rolify-api.herokuapp.com/blogs/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch("https://blogger-rolify-api.herokuapp.com/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/blogger-react-app/"); //push to home
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h1>{blogs.title}</h1>
          <p>Written By: {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
