import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MainContainer from './components/mainContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div id="container">
        <Navbar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
