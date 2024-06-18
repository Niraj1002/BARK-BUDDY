import Link from "next/link";
import React from "react";
import {
  FaPaw,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaGenderless,
  FaDog,
  FaRegHeart,
} from "react-icons/fa";

const Card = ({ dog }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 sm:flex">
      <div className="sm:w-1/3">
        <img
          src={dog.pictureURL}
          alt={dog.name}
          className="w-full h-auto sm:h-full object-cover"
        />
      </div>
      <div className="p-4 sm:flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{dog.name}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-1" />
          <span>{dog.place}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaGenderless className="mr-1" />
          <span>{dog.gender}</span>
          <span className="mx-1">•</span>
          <FaDog className="mr-1" />
          <span>{dog.breed}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaBirthdayCake className="mr-1" />
          <span>{dog.age} years old</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <FaPaw className="mr-1" />
          <span>{dog.color}</span>
          <span className="mx-1">•</span>
          <span>{dog.weight} kg</span>
          <span className="mx-1">•</span>
          <span>{dog.height} cm</span>
        </div>
        <p className="text-gray-700 mb-4">{dog.story}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaRegHeart className="text-red-500 mr-1" />
            <span className="text-gray-600">Favourite</span>
          </div>
          <Link href={`/adopt-a-dog/dog/${dog._id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Adopt Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
