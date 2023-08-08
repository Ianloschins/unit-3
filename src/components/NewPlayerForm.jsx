import React, { useState } from 'react';
import { createNewPlayer } from '../API/ajaxHelpers'
import "../App.css";

const NewPlayerForm = () => {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    breed: '',
    status: '',
    imageUrl: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createNewPlayer(newPlayer);
      if (response) {
        console.log('New player created:', response);
      }
    } catch (error) {
      console.error('Error creating new player:', error);
    }
  };

  return (
    <div>
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={newPlayer.name}
          onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
        />
        <label>Breed:</label>
        <input
          type="text"
          value={newPlayer.breed}
          onChange={(e) => setNewPlayer({ ...newPlayer, breed: e.target.value })}
        />
        <label>Status:</label>
        <input
          type="text"
          value={newPlayer.status}
          onChange={(e) => setNewPlayer({ ...newPlayer, status: e.target.value })}
        />
        <label>Image URL:</label>
        <input
          type="text"
          value={newPlayer.imageUrl}
          onChange={(e) => setNewPlayer({ ...newPlayer, imageUrl: e.target.value })}
        />
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;