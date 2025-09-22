// src/components/PostCard.js (Updated with Read More functionality and Lucide icons)
import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronDown, ChevronUp, Tag } from 'lucide-react';

const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      // Check if text is truncated
      setShowReadMore(
        descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight
      );
    }
  }, [post.description]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="post-card">
      <div className="card-image">
        <img src={post.image} alt={post.title} loading='lazy'/>
        <span className="category-badge">
          <Tag size={14} />
          {post.category}
        </span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <div 
          ref={descriptionRef}
          className={`card-description ${isExpanded ? 'expanded' : 'truncated'}`}
        >
          {post.description}
        </div>
        <div className="card-footer">
          <span className="post-date">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString()}
          </span>
          {showReadMore && (
            <button className="read-more" onClick={toggleExpand}>
              {isExpanded ? (
                <>
                  Read less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Read more <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;