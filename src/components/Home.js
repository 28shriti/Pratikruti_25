import React from 'react';

const Home = () => (
  <div id="home" className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
    <div className="text-center text-black px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Event Name</h1>
      <p className="text-lg md:text-xl text-gray-700">Join us for an unforgettable experience!</p>
    </div>
  </div>
);

export default Home;
