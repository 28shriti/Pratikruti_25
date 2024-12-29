import React from 'react';

const Gallery = () => (
  <div className="container mx-auto my-10 px-4">
    <h2 className="text-3xl font-bold mb-4">Gallery</h2>
    <div className="grid grid-cols-3 gap-4">
      <img src="/path-to-image1.jpg" alt="Event" className="w-full h-48 object-cover rounded-lg shadow-md" />
      <img src="/path-to-image2.jpg" alt="Event" className="w-full h-48 object-cover rounded-lg shadow-md" />
      <img src="/path-to-image3.jpg" alt="Event" className="w-full h-48 object-cover rounded-lg shadow-md" />
    </div>
  </div>
);

export default Gallery;
