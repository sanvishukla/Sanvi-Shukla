import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div className="blog-grid">
      {blogsData.map((blog) => (
        <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card">
          {blog.previewUrl && (
            <div className="blog-card-iframe-wrapper">
              <iframe src={blog.previewUrl} title={blog.title} className="blog-card-iframe" tabIndex="-1" aria-hidden="true" scrolling="no" />
              <div className="blog-card-iframe-overlay" />
            </div>
          )}
          {blog.image && !blog.previewUrl && (
            <div className="blog-card-image-wrapper">
              <img src={blog.image} alt={blog.title} className="blog-card-image" />
            </div>
          )}
          <div className="blog-date">{blog.date}</div>
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-excerpt">{blog.excerpt}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogSection;
