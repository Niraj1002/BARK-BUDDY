"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddADog = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    story: "",
    canLiveWithChildren: false,
    isVaccinated: false,
    training: "",
    gender: "Male",
    breed: "",
    age: "",
    color: "",
    weight: "",
    height: "",
    picture: null,
    pictureURL: "",
  });

  const onDrop = useCallback((acceptedFiles) => {
    setFormData((prevState) => ({
      ...prevState,
      picture: acceptedFiles[0],
    }));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append("file", formData.picture);
    uploadData.append("name", formData.name); // Append the name field

    try {
      const uploadRes = await axios.post("/api/upload-image", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const pictureURL = uploadRes.data.msg.secure_url;

      const finalFormData = { ...formData, pictureURL };

      const response = await axios.post("/api/add", finalFormData);
      console.log("Dog listed successfully:", response.data);
      router.push("/adopt-a-dog");
    } catch (error) {
      console.error(
        "Error listing dog:",
        error.response?.data?.msg || error.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          List a Dog for Adoption
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Place
            </label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Story
            </label>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="canLiveWithChildren"
              checked={formData.canLiveWithChildren}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">
              Can Live With Children
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isVaccinated"
              checked={formData.isVaccinated}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label className="ml-2 block text-sm font-medium text-gray-700">
              Is Vaccinated
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Training
            </label>
            <input
              type="text"
              name="training"
              value={formData.training}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700"
            >
              Breed
            </label>
            <select
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select a breed</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="German Shepherd">German Shepherd</option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Bulldog">Bulldog</option>
              <option value="Poodle">Poodle</option>
              <option value="Beagle">Beagle</option>
              <option value="Rottweiler">Rottweiler</option>
              <option value="Yorkshire Terrier">Yorkshire Terrier</option>
              <option value="Boxer">Boxer</option>
              <option value="Dachshund">Dachshund</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Picture
            </label>
            <div
              {...getRootProps()}
              className={`mt-1 p-6 border-2 border-dashed rounded-md ${
                isDragActive ? "border-indigo-600" : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              {formData.picture ? (
                <p>{formData.picture.name}</p>
              ) : (
                <p className="text-center text-gray-500">
                  Drag &apos;n&apos; drop a picture here, or click to select one
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            List Dog for Adoption
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddADog;
