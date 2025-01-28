"use client";
import React, { useState, useEffect } from "react";
import data from "@/app/component/Data";
import { useParams } from "next/navigation";
import Link from "next/link";

const BlogContent = () => {
  // Using `useParams` to dynamically fetch params
  const params = useParams();
  const blogId = parseInt(params.id as string, 10); // Convert to integer
  const blogPost = data.find((post) => post.id === blogId);

  // Comments with names
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [newComment, setNewComment] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleAddComment = () => {
    if (newComment.trim() !== "" && userName.trim() !== "") {
      const updatedComments = [
        ...comments,
        { name: userName.trim(), comment: newComment.trim() },
      ];

      // Update state and localStorage
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));

      setNewComment("");
      setUserName("");
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);

    // Update state and localStorage
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#eceeed] to-[#d3d6dc]">
        <h2 className="text-3xl font-semibold text-[#121c26] mb-4">
          Blog Not Found
        </h2>
        <Link href="/" className="text-blue-500 hover:underline text-lg">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-7 py-8 bg-gradient-to-b from-[#eceeed] to-[#d3d6dc]">
      <div className="container flex flex-col justify-center px-[1vw] items-center mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#121c26]">
          {blogPost.title}
        </h1>
        <div className="max-w-5xl p-6 rounded-lg shadow-lg flex flex-col gap-4 bg-white mb-8">
          <div className={`${blogPost.image} h-[300px] bg-cover bg-center rounded-lg`}></div>
          <p className="text-gray-500 text-sm mb-6">{blogPost.date}</p>
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-[#121c26]">
              Comments
            </h3>
            <div className="flex flex-col gap-4 mb-4">
              <input
                type="text"
                className="p-2 border rounded-lg shadow-sm"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                className="p-2 border rounded-lg shadow-sm"
                placeholder="Write your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                onClick={handleAddComment}
                className="bg-[#121c26] text-white px-4 py-2 rounded-lg shadow hover:bg-[#2d557c] transition-colors"
              >
                Add Comment
              </button>
            </div>
            {comments.map((commentObj, index) => (
              <div
                key={`comment-${index}`}
                className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center mb-2"
              >
                <div>
                  <p className="font-semibold text-[#121c26]">{commentObj.name}</p>
                  <p className="text-gray-700">{commentObj.comment}</p>
                </div>
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
