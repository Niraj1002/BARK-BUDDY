"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
  faPhone,
  faMapMarkerAlt,
  faCity,
  faFlag,
  faMapPin,
  faCalendarAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function MultipageForm() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    date: "",
    time: "",
  });
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data: ", formData);

    // Simulating form submission
    setError(["Form submission not implemented"]);
    setSuccess(true);

    // Uncomment below code when you have actual form submission logic

    const res = await fetch("api/buy", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    console.log("msg", msg);
    if (success) {
      // Handle success
      router.push("/");
      console.log("push");
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const progressPercentage = ((currentPage - 1) / 4) * 100;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto py-8 px-6 bg-white shadow-md rounded-lg"
    >
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {currentPage === 1 && (
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Personal Information
          </h1>
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faUser} /> Full Name
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@gmail.com"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Contact Information
          </h1>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faPhone} /> Phone Number
            </label>
            <input
              onChange={handleChange}
              value={formData.phone}
              type="text"
              name="phone"
              id="phone"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type your phone number here..."
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faComment} /> Your Message
            </label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-none"
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="mt-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
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
        </div>
      )}

      {currentPage === 3 && (
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Address Information
          </h1>
          <div>
            <label htmlFor="address" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
            </label>
            <input
              onChange={handleChange}
              value={formData.address}
              type="text"
              name="address"
              id="address"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type your address here..."
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faCity} /> City
            </label>
            <input
              onChange={handleChange}
              value={formData.city}
              type="text"
              name="city"
              id="city"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type your city here..."
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faFlag} /> State
            </label>
            <input
              onChange={handleChange}
              value={formData.state}
              type="text"
              name="state"
              id="state"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type your state here..."
              required
            />
          </div>
          <div>
            <label htmlFor="zip" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faMapPin} /> Zip Code
            </label>
            <input
              onChange={handleChange}
              value={formData.zip}
              type="text"
              name="zip"
              id="zip"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type your zip code here..."
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="mt-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
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
        </div>
      )}

      {currentPage === 4 && (
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Appointment
          </h1>
          <div>
            <label htmlFor="date" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faCalendarAlt} /> Choose Date
            </label>
            <input
              onChange={handleChange}
              value={formData.date}
              type="date"
              name="date"
              id="date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block mb-1 font-medium">
              <FontAwesomeIcon icon={faClock} /> Choose Time Slot
            </label>
            <input
              onChange={handleChange}
              value={formData.time}
              type="time"
              name="time"
              id="time"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="mt-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md"
              onClick={prevPage}
            >
              Previous
            </button>
            <button
              type="submit"
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      <div className="mt-6">
        {success && (
          <div className="text-green-800 bg-gray-100 px-4 py-2 rounded-md">
            Form submitted successfully!
          </div>
        )}
      </div>
    </form>
  );
}
