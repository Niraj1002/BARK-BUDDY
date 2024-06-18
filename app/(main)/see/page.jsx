"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Page = () => {
  const { user } = useUser();
  const [contri, setContri] = useState([]);

  useEffect(() => {
    const fetchContri = async () => {
      if (!user) return;

      try {
        const response = await axios.get(`/api/donate?user=${user.id}`);
        setContri(response.data.donations);
        console.log(response.data);
      } catch (error) {
        console.error(
          "Error fetching contri:",
          error.response?.data?.msg || error.message
        );
      }
    };

    fetchContri();
  }, [user]);

  console.log(contri);

  return (
    <div>
      <h1>Donations</h1>
      {contri.length > 0 ? (
        <ul>
          {contri.map((donation) => (
            <li key={donation._id}>
              {donation.name}: ${donation.amount}
            </li>
          ))}
        </ul>
      ) : (
        <p>No donations found.</p>
      )}
    </div>
  );
};

export default Page;
