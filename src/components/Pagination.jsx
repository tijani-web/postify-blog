// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="pagination">
      <div className="pagination-content">
        <button
          className="pagination-btn"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        
        <div className="page-numbers">
          {pageNumbers.map(number => (
            <button
              key={number}
              className={`page-btn ${currentPage === number ? 'active' : ''}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
        
        <button
          className="pagination-btn"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Pagination;