"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

/*interface FormValues {
    name: string;
    email: string;
    message: string;
}*/
const route = useRouter();
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Redirect to home page
    route.push("/");
    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
};

  return (
    <div className="min-h-screen px-7 py-8 bg-gradient-to-b from-[#eceeed] to-[#d3d6dc]">
      <div className="container flex flex-col justify-center px-[1vw] items-center mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#121c26]">
          Contact Us
        </h1>
        <div className="max-w-5xl p-6 rounded-lg shadow-lg flex flex-col gap-4 bg-white mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              className="p-2 border rounded-lg shadow-sm"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="p-2 border rounded-lg shadow-sm"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="p-2 border rounded-lg shadow-sm"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-[#121c26] text-white px-4 py-2 rounded-lg shadow hover:bg-[#2d557c] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
