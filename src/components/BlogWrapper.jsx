// src/components/BlogWrapper.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Filters from './Filters';
import PostGrid from './PostGrid';
import Pagination from './Pagination';
import Footer from './Footer';
import postsData from '../data/posts.json';

const BlogWrapper = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const postsPerPage = 6;

  useEffect(() => {
    // Check user's preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Ensure postsData is an array
    if (Array.isArray(postsData)) {
      setPosts(postsData);
    } else if (postsData && Array.isArray(postsData.posts)) {
      setPosts(postsData.posts);
    } else if (postsData && postsData.data && Array.isArray(postsData.data)) {
      setPosts(postsData.data);
    } else {
      console.error('Invalid posts data structure:', postsData);
      setPosts([]);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  // Filter posts based on search query and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`blog-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header 
        postCount={filteredPosts.length} 
        totalPosts={posts.length}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleDarkMode}
      />
      <Filters 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        isDarkMode={isDarkMode}
      />
      <PostGrid posts={currentPosts} isDarkMode={isDarkMode} />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isDarkMode={isDarkMode}
      />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default BlogWrapper;