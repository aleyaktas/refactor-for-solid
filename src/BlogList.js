import { Link } from "react-router-dom";

//blogs rae received as props here
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <h1 style={{ color: "hsl(340, 57%, 64%)" }}>All Blogs!</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* Id will be passed to BlogDetails using Params  */}
          <Link to={`/blogger-react-app/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>Written By: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
