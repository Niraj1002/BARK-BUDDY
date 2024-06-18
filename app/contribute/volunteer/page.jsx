"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const VolunteerPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });
  const [userDetails, setUserDetails] = useState({
    user: "",
    name: "",
    email: "",
  });
  useEffect(() => {
    if (user) {
      setUserDetails({
        user: user.id,
        name: user.fullName,
        email: user.emailAddresses[0].emailAddress,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const res = await axios.post("/api/volunteer", {
        userDetails,
        ...formData,
      });
      console.log("Received response:", res.data);
      console.log("Contribution saved successfully");
      router.push("/contribute/volunteer/my-volunteering");
    } catch (error) {
      console.error("Failed to save contribution details", error);
    }
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-center">
          BARKBUDDY Volunteer Signup
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Join us in making a difference in the lives of animals. Select a date
          and time that works for you and become a part of our mission.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Volunteer Your Time</h2>
        <p className="text-gray-700 mb-6">
          We greatly appreciate your willingness to volunteer. Please fill out
          the form below to choose a date and time that you are available.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="time"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Donation Feature</h2>
        <p className="text-gray-700">
          Recognizing the importance of community support, BARKBUDDY offers
          multiple ways for individuals to contribute to the cause. Users can
          donate money directly, volunteer their time, or provide food and
          expertise such as training or veterinary services. This multifaceted
          approach ensures that everyone can contribute in a way that suits them
          best.
        </p>
      </div>
    </div>
  );
};

export default VolunteerPage;
