import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Contact from './components/Contact';
import TeamDetails from './components/TeamDetails';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TeamDetails />
      <Schedule />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
