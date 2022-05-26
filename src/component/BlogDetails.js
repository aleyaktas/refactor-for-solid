import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
import {url} from './config'
import { deleteFetch } from "./fetch";
import Header from "./Header";

const BlogDetails = () => {
  const { id } = useParams(); //from bloglist key = blog.id
  const { data: blogs, isPending, error } = useFetch(
    `${url}/${id}` 
  );
  const history = useHistory();

  const handleDelete = () => {
    deleteFetch(blogs.id);
    history.push("/blogger-react-app/"); //push to home
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <Header title={blogs.title} text={`"Written by": ${blogs.author}`} />
          <div>{blogs.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
