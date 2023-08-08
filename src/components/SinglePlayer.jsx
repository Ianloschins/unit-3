import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer, deletePlayer } from '../API/ajaxHelpers';
import "../App.css";

const SinglePlayer = () => {
  const { playerId } = useParams();
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetchSinglePlayer(playerId);
        if (response.success) {
          setPlayerData(response.data.player); // Access the 'player' property in the API response data
        } else {
          console.error('Error fetching player data:', response.error);
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, [playerId]);

  const handleDelete = async () => {
    try {
      const response = await deletePlayer(playerId);
      if (response) {
        console.log('Player deleted:', response);
        // Redirect to the home page after deletion
        history.push('/');
      }
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  if (!playerData) {
    return <div>Player data not found.</div>;
  }

  return (
    <div>
      {playerData ? (
        <div className="player-single-card">
        <h2>Player Details</h2>
        <h2>ID: {playerData.id}</h2>
        <h2>Name: {playerData.name}</h2>
        <h2>Breed: {playerData.breed}</h2>
        <img src={playerData.imageUrl} alt={playerData.name} />
        <h2>Status: {playerData.status}</h2>
        <h2>Created At: {playerData.createdAt}</h2>
        <h2>Team ID: {playerData.teamId}</h2>
        <h2>Cohort ID: {playerData.cohortId}</h2>
        <button onClick={handleDelete}>Delete</button>
      </div>
      ) : (
        <div>Error fetching player data</div>
      )}
    </div>
  );
};

export default SinglePlayer;