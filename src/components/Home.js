// import React from 'react';

// const Home = () => (
//   <div id="home" className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
//     <div className="text-center text-black px-4 md:px-8">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Event Name</h1>
//       <p className="text-lg md:text-xl text-gray-700">Join us for an unforgettable experience!</p>
//     </div>
//   </div>
// );

// export default Home;

import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-cover bg-center h-full flex flex-col justify-center items-center"
      style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
    >
      {/* Top Section: Three Logos */}
      <div className=" w-full flex flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 mt-24">
        <img src="/logos/ycceLogo.png" alt="YCCE Logo" className="w-24 h-24 md:w-52 md:h-52" />
        <img src="/logos/rubyJublieeCelebrationLogo.png" alt="Ruby Jubliee Celebration Logo" className="w-32 h-32 md:w-60 md:h-60" />
        <img src="/logos/megheGroupLogo.png" alt="Meghe Group Logo" className="w-24 h-24 md:w-52 md:h-52" />
      </div>

      {/* Single Line Text */}
      <h1 className="text-xl md:text-4xl font-extrabold italic mb-6 text-center text-black">
        Celebrating 40 Years of Excellence
      </h1>

      {/* Middle Section: Two Logos */}
      <div className="flex flex-col items-center space-y-2 my-8">
        <img src="/logos/pratikrutiLogo.png" alt="Pratikruti Logo" className="w-48 h-48 md:w-72 md:h-72" />
        <img src="/logos/pratikruti.png" alt="Pratikruti" className="w-60 h-24 md:w-96 md:h-36" />
      </div>

      {/* Bottom Section: Event Details */}
      <div className="text-center text-white px-4 md:px-8">
        {/* Date */}
        <p className="text-2xl md:text-4xl font-bold text-black mb-16">Tuesday 25<sup>th</sup> Februrary 2025</p>

        {/* Organized By */}
        <p className="text-sm md:text-lg text-gray-700 mb-1">Organized By</p>
        <p className="text-md md:text-2xl font-bold text-gray-700">
          Department of Mechanical Engineering
        </p>
        <p className="text-md md:text-2xl font-bold text-gray-700">
          YESHWANTRAO CHAVHAN COLLEGE OF ENGINEERING
        </p>

        {/* Small Footer Lines */}
        <div className="text-xs md:text-md text-gray-500 mt-4 mb-10">
          (An Autonomous Institution Affiliated to RTM Nagpur University) <br />
          (NAAC Accrediated with 'A++' Grade) <br />
          Hingna Road, Wanadongri, Nagpur 441 110. <br />
          <a href="http://www.ycce.edu"><u>www.ycce.edu</u></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
