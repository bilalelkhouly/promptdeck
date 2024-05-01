"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import { set } from "mongoose";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    if (!text) {
      setFilteredPosts(posts);
      return;
    }

    const lowercasedText = text.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        (post.tag && post.tag.toLowerCase().includes(lowercasedText)) ||
        (post.creator.username &&
          post.creator.username.toLowerCase().includes(lowercasedText)) ||
        (post.prompt && post.prompt.toLowerCase().includes(lowercasedText))
    );

    setFilteredPosts(filtered);
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);

    const lowercasedTag = tag.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        (post.tag && post.tag.toLowerCase().includes(lowercasedTag)) ||
        (post.creator.username &&
          post.creator.username.toLowerCase().includes(lowercasedTag)) ||
        (post.prompt && post.prompt.toLowerCase().includes(lowercasedTag))
    );

    setFilteredPosts(filtered);
  };

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();
    setPosts(data);
    setFilteredPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={searchText ? filteredPosts : posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
