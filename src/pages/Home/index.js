import React from "react";
import { useState } from "react";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearcgBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";
import { EmptyList } from "../../components/common/EmptyList";
export default function Home() {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };
  // search for blogs by categorty
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
      setBlogs(blogList);
      setSearchKey("");
  };

  return (
    <div>
               {/*  Page Header */}
      <Header />
            {/*  Search Bar */}
      <SearcgBar
        value={searchKey}
        clearSearch = {handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
       {/*  Blog List & Empty List */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
              
    </div>
  );
}
