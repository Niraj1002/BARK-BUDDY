"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaDog, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";

const Page = () => {
  const pathname = usePathname();
  const id = pathname.replace("/adopt-a-dog/dog/", ""); // Extracting the id from the pathname
  console.log(id); // Output: [id]

  const [selectedDog, setSelectedDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDog = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/add/${id}`);
        if (response.data.success) {
          setSelectedDog(response.data.dog);
        } else {
          setError("Dog not found");
        }
      } catch (error) {
        setError(error.response?.data?.msg || error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (!selectedDog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Dog not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-6 flex items-center">
        <FaDog className="mr-2" />
        {selectedDog.name}
      </h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <img
            src={selectedDog.pictureURL} // Ensure to use correct property names based on your API response
            alt={selectedDog.name}
            className="w-full h-64 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4 mb-2 flex items-center">
            <GiSittingDog className="mr-2" />
            {selectedDog.name}
          </h2>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Breed:</span> {selectedDog.breed}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Age:</span> {selectedDog.age}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Gender:</span> {selectedDog.gender}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Color:</span> {selectedDog.color}
          </p>
          <p className="text-gray-700 text-lg mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            {selectedDog.place}
          </p>
          <p className="text-gray-700 mb-4">{selectedDog.story}</p>

          <Link href={`/adopt-a-dog/dog/${id}/tnc`}>
            <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Adopt {selectedDog.name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
