import BlogListItem from "./BlogListItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <h1 style={{ color: "hsl(340, 57%, 64%)" }}>All Blogs!</h1>
      {blogs.map((blog) => (
        <BlogListItem blogId={blog.id} blogAuthor={blog.author} title={blog.title} />
      ))}
    </div>
  );
};

export default BlogList;
