// src/components/Header.js
import React from 'react';

const Header = ({ postCount, totalPosts, isDarkMode, onThemeToggle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo">Postify</h1>
          <p className="tagline">Stories that matter</p>
        </div>
        <div className="post-counter">
          Showing {postCount} of {totalPosts} posts
        </div>
        <button className="theme-toggle" onClick={onThemeToggle} aria-label="Toggle theme">
            {isDarkMode ? (
              <svg className="theme-icon sun-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-1.5 0v2.25c0 .414.336.75.75.75zm0 15a.75.75 0 0 0-.75.75V22a.75.75 0 0 0 1.5 0v-2.25A.75.75 0 0 0 12 20zM4.222 5.222a.75.75 0 0 0 1.06 0l1.5 1.5a.75.75 0 0 0-1.06 1.06l-1.5-1.5a.75.75 0 0 0 0-1.06zm14.496 14.496a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06zM2 12a.75.75 0 0 0 .75.75H5a.75.75 0 0 0 0-1.5H2.75A.75.75 0 0 0 2 12zm17 0a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-1.5 0v2.25c0 .414.336.75.75.75zm-7 7a.75.75 0 0 0-.75.75V22a.75.75 0 0 0 1.5 0v-2.25A.75.75 0 0 0 12 19z"/>
              </svg>
            ) : (
              <svg className="theme-icon moon-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.752 15.002A9.75 9.75 0 0 1 8.999 2.25a9.75 9.75 0 1 0 12.753 12.752z"/>
              </svg>
            )}
          </button>
      </div>
    </header>
  );
};

export default Header;