"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const router = useRouter();
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
      router.push(`/contact/success?msg=success&name="${fullname}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto py-4 px-6 ">
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
      </div>

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
      </div>

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
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md w-full"
        type="submit"
      >
        Send
      </button>

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
