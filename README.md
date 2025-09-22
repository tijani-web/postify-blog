# Postify – React Blog Application

Postify is a modern, responsive blog application built with **React** as part of my **Front-End Web Development Internship at Elevvo Pathways**.  

The project demonstrates clean UI design, state management, and essential front-end features such as filtering, search, pagination, and theme toggling.

---

## 🚀 Features

- 📌 **Responsive layout** (mobile, tablet, desktop)  
- 🔍 **Search** posts by title keyword  
- 🏷️ **Category filter** (Tech, Travel, Food)  
- 📄 **Pagination** (6 posts per page)  
- 🖼️ **Post cards** with image, title, description, date, category badge  
- 📜 **Read More / Read Less** toggle for descriptions  
- 🌓 **Theme toggle** (Dark/Light mode)  
- 🗓️ **Lucide icons** for date and UI elements  
- ⚡ **Image lazy loading** for performance  

---

## 🛠️ Tech Stack

- **React** – Component-based UI  
- **CSS** – Custom styling (BlogWrapper.css)  
- **Lucide React** – Icon library  
- **Vite** – Fast development environment  

---

## 📂 Project Structure

```plaintext
src/
  components/
    BlogWrapper.js    // main parent (manages state & logic)
    Header.js         // logo, tagline, post counter, theme toggle
    Filters.js        // search + category filter
    PostGrid.js       // renders grid of posts
    PostCard.js       // individual post card with Read More/Less
    Pagination.js     // pagination controls
    Footer.js         // footer text
  data/
    posts.json        // mock data for 20 posts
  App.js              // entry point -> renders BlogWrapper
  main.jsx            // React DOM render
```
Getting Started
Prerequisites

```
Node.js (>= 18.x recommended)

npm or yarn
```
Installation

```Clone the repository

git clone https://github.com/tijani-web/postify-blog.git
cd postify
```
Install dependencies

npm install


Run the development server

npm run dev


```Open the app in your browser

http://localhost:5173
```
📦 Build for Production
npm run build
npm run preview

## 🙌 Acknowledgements

This project was completed as part of the **Elevvo Pathways Front-End Web Development Internship**.  

Special thanks to:  
- Elevvo Pathways([https://www.linkedin.com/company/elevvopaths/]) for the opportunity  
- Unsplash [https://unsplash.com/] / Pixabay [https://pixabay.com/] – free images  
- Lucide React [https://lucide.dev/] – modern icon set  
- Vite [https://vitejs.dev/] – build tool
