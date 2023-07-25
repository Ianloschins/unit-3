import React, { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/todos/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    if (selectedContactId) {
      fetchContact();
    } else {
      setContact(null);
    }
  }, [selectedContactId]);

  console.log(contact); // Check the contact data in the console

  return (
    <div>
      {contact ? (
        <>
          <h2>Contact Details</h2>
          <p>Name: {contact.title}</p>
          <p>Completed: {contact.completed ? "Yes" : "No"}</p>
          <p>User ID: {contact.userId}</p>
          <button onClick={() => setSelectedContactId(null)}>Back to List</button>
        </>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
};

export default SelectedContact;