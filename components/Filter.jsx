import React, { useState, useEffect } from "react";

const categories = [
  "All",
  "Food",
  "Grooming",
  "Toys",
  "Accessories",
  "Bedding",
  "Travel",
  "Training",
  "Clothing",
  "Health",
];

const Filter = ({ filters, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(filters.category);
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice);

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    if (savedFilters) {
      setSelectedCategory(savedFilters.category);
      setMinPrice(savedFilters.minPrice);
      setMaxPrice(savedFilters.maxPrice);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "filters",
      JSON.stringify({
        category: selectedCategory,
        minPrice,
        maxPrice,
      })
    );
  }, [selectedCategory, minPrice, maxPrice]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({
      category: selectedCategory === "All" ? "" : selectedCategory,
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
      searchTerm: filters.searchTerm,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Filters</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Price Range
          </label>
          <div className="flex justify-between mb-4">
            <input
              type="number"
              name="minPrice"
              min="0"
              max="10000"
              value={minPrice}
              onChange={handlePriceChange}
              className="w-1/2 px-4 py-2 border rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Min"
            />
            <input
              type="number"
              name="maxPrice"
              min="0"
              max="10000"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Max"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="range"
              name="minPrice"
              min="0"
              max="10000"
              value={minPrice}
              onChange={handlePriceChange}
              className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="range"
              name="maxPrice"
              min="0"
              max="10000"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
