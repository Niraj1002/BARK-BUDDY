import React, { useEffect, useState } from "react";

const fetchContacts = async () => {
  const res = await fetch("/api/contact");
  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }
  const data = await res.json();
  return data.contacts; // Adjusted to return the contacts array
};

const GetContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await fetchContacts();
        console.log("Fetched data:", data); // Debugging line
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!Array.isArray(contacts) || contacts.length === 0)
    return <div>No contacts found</div>;

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact._id}>
          <h1>{contact.fullname}</h1>
          <p>{contact.email}</p>
          <p>{contact.message}</p>
        </div>
      ))}
    </div>
  );
};

export default GetContacts;
