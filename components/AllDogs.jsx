"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [filters, setFilters] = useState({
    breed: "",
    age: "",
    gender: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(6); // Number of dogs per page

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get("/api/add");
        if (response.data.success) {
          setDogs(response.data.dogs);
          setFilteredDogs(response.data.dogs); // Initially set filtered dogs to all dogs
        }
      } catch (error) {
        console.error(
          "Error fetching dogs:",
          error.response?.data?.msg || error.message
        );
      }
    };
    fetchDogs();
  }, []);

  // Function to handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Function to apply filters and update filteredDogs
  useEffect(() => {
    let filteredResults = dogs.filter((dog) => {
      return (
        (filters.breed === "" ||
          dog.breed.toLowerCase().includes(filters.breed.toLowerCase())) &&
        (filters.age === "" || dog.age.toString() === filters.age) &&
        (filters.gender === "" ||
          dog.gender.toLowerCase() === filters.gender.toLowerCase())
      );
    });
    setFilteredDogs(filteredResults);
    setCurrentPage(1); // Reset to first page when filters change
  }, [dogs, filters]);

  // Array of example breeds
  const exampleBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "Bulldog",
    "Poodle",
    "Beagle",
    "Rottweiler",
    "Yorkshire Terrier",
    "Boxer",
    "Dachshund",
  ];

  // Pagination
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white  rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Dogs for Adoption
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <div className="w-full md:w-auto">
          <label htmlFor="breed" className="block font-medium">
            Breed:
          </label>
          <select
            id="breed"
            name="breed"
            value={filters.breed}
            onChange={handleFilterChange}
            className="px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500 w-full"
          >
            <option value="">Select a breed</option>
            {exampleBreeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-auto">
          <label htmlFor="age" className="block font-medium">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={filters.age}
            onChange={handleFilterChange}
            className="px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div className="w-full md:w-auto">
          <label htmlFor="gender" className="block font-medium">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="px-2 py-1 border rounded-md focus:outline-none focus:border-blue-500 w-full"
          >
            <option value="">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {/* Dogs */}
      <div className="space-y-6">
        {currentDogs.length > 0 ? (
          currentDogs.map((dog) => <Card key={dog._id} dog={dog} />)
        ) : (
          <p className="text-center text-gray-500">
            No dogs match the current filters.
          </p>
        )}
      </div>

      {/* Pagination */}
      {filteredDogs.length > dogsPerPage && (
        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(filteredDogs.length / dogsPerPage))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${
                  currentPage === index + 1 ? "bg-blue-600" : ""
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AllDogs;
