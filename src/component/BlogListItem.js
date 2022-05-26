import React from 'react'
import { Link } from "react-router-dom";
import Header from './Header';

const BlogListItem = ({blogId, blogAuthor, title}) => {
  return (
    <div>
      <div className="blog-preview" key={blogId}>
          <Link to={`/blogger-react-app/blogs/${blogId}`}>
            <Header title={title} text={`Written by: ${blogAuthor}`} />
          </Link>
        </div>
    </div>
  )
}

export default BlogListItem