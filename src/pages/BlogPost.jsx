import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Link as LinkIcon } from 'lucide-react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { blogsData } from '../data/blogs';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Scroll to top when loading the blog post
    window.scrollTo(0, 0);
    const foundBlog = blogsData.find((b) => b.id === id);
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className="blog-post-container not-found">
        <h2>Blog post not found</h2>
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const title = blog.title;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, '_blank');
  };

  // Very simple markdown parser for the mock content
  const renderContent = (content) => {
    return content.split('\\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index}>{line.replace('# ', '')}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index}>{line.replace('## ', '')}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index}>{line.replace('### ', '')}</h3>;
      } else if (line.startsWith('- ')) {
        // Handle bolding simply
        const parts = line.replace('- ', '').split('**');
        return (
          <li key={index}>
            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
          </li>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  return (
    <div className="blog-post-container">
      <nav className="blog-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </nav>

      <article className="blog-article">
        {/* If the blog provides a custom component, we render it directly. Otherwise we show standard date and markdown content */}
        {blog.component ? (
          <blog.component />
        ) : (
          <>
            <header className="blog-header">
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
              </div>
            </header>

            <div className="blog-content">
              {renderContent(blog.content)}
            </div>
          </>
        )}
      </article>

      <div className="share-section">
        <h3 className="share-title"><Share2 size={18} /> Share this post</h3>
        <div className="share-buttons">
          <button className="share-btn twitter" onClick={shareToTwitter} aria-label="Share on Twitter">
            <FaTwitter size={18} /> Twitter
          </button>
          <button className="share-btn linkedin" onClick={shareToLinkedIn} aria-label="Share on LinkedIn">
            <FaLinkedin size={18} /> LinkedIn
          </button>
          <button className="share-btn copy-link" onClick={handleCopyLink} aria-label="Copy Link">
            <LinkIcon size={18} /> {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
