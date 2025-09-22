// src/components/PostGrid.js
import React from 'react';
import PostCard from './PostCard';

const PostGrid = ({ posts }) => {
  return (
    <section className="post-grid">
      <div className="grid-container">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="no-posts">
            <h3>No posts found matching your criteria</h3>
            <p>Try adjusting your search or category filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostGrid;