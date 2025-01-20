import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import Authors from "./views/AuthorsViews.js";
import AuthorDetails from "./views/AuthorDetail.js";
import NewAuthor from "./views/NewAuthor.views.js";
import BlogList from "./views/BlogList.js";
import BlogDetail from "./views/BlogDetail.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
        <Route path="api/authors" element={<Authors />} />
        <Route path="api/authors/:id" element={<AuthorDetails/>}/>
        <Route path="/api/authors/new" element={<NewAuthor/>} />
        <Route path="/api/blogposts" element={<BlogList />} />
        <Route path="/api/blogposts/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
