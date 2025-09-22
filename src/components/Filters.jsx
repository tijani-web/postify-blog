// src/components/Filters.js
import React from 'react';

const Filters = ({ searchQuery, onSearchChange, selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'Tech', 'Travel', 'Food'];
  
  return (
    <section className="filters">
      <div className="filters-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={onSearchChange}
            className="search-input"
          />
        </div>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filters;