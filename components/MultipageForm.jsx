"use client";
import { useState } from "react";

export default function MultipageForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    // Simulating form submission
    // Replace this with actual form submission logic
    setError(["Form submission not implemented"]);
    setSuccess(true);

    // Uncomment below code when you have actual form submission logic

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto py-4 px-6 border-t"
    >
      {currentPage === 1 && (
        <div className="mb-4">
          <label htmlFor="fullname" className="block mb-1">
            Full Name
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="John Doe"
            required
          />
          <button
            type="button"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      )}

      {currentPage === 2 && (
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="john@gmail.com"
            required
          />
          <button
            type="button"
            className="mt-2 mr-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
            onClick={prevPage}
          >
            Previous
          </button>
          <button
            type="button"
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      )}

      {currentPage === 3 && (
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
            id="message"
            placeholder="Type your message here..."
            rows="4"
            required
          ></textarea>
          <button
            type="button"
            className="mt-2 mr-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
            onClick={prevPage}
          >
            Previous
          </button>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      )}

      <div className="mt-4">
        {error &&
          error.map((e, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } bg-gray-100 px-4 py-2 rounded-md`}
            >
              {e}
            </div>
          ))}
      </div>
    </form>
  );
}
