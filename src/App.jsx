import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import { fetchAllPlayers } from './API/ajaxHelpers';
import './App.css';

const App = () => {
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    const fetchPlayersData = async () => {
      try {
        const allPlayers = await fetchAllPlayers();
        setPlayersData(allPlayers.data.players);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayersData();
  }, []);

  return (
    <Router>
      <nav className='NavNav'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-player">Add New Player</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<AllPlayers players={playersData} />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </Router>
  );
};

export default App;