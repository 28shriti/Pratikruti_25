import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import TeamDetails from './components/TeamDetails';
import '@fortawesome/fontawesome-free/css/all.min.css';


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
