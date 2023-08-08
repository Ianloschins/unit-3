import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import "../App.css";

const AllPlayers = ({ players }) => {
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  const handleSearch = (searchTerm) => {
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  return (
    <div className="container">
      <h2 className='allPlayerTitle'>All Players</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="player-container">
        {filteredPlayers.length === 0 ? (
          <div>No players data available.</div>
        ) : (
          filteredPlayers.map((player) => (
            <div key={player.id} className="player-card">
              <h2>Name: {player.name}</h2>
              <img src={player.imageUrl} alt={player.name} />
              <h2>Status: {player.status}</h2>
              <Link to={`/players/${player.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
