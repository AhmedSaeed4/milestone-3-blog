"use client";
import Link from 'next/link';
import React from 'react';

const Navbar2 = () => {
  return (
    <nav className=" text-[#121c26] bg-[#eceeed] font-mono py-8 px-6 border-b-2 border-[#121c26]" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-[32px]">MY BLOG</div>
        <ul className="flex space-x-6 font-bold text-[16px]">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
          <Link href={`../blog/${1}`}> Blog</Link>
          </li>
          <li>
            <a href="../contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
