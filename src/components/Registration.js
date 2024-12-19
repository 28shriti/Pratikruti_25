import React from 'react';

const Registration = () => (
  <div id="register" className="bg-gray-100 py-20">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Registration Details</h2>

    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {/* Registration Amount */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Registration Amount</h3>
        <div className="text-lg text-gray-600 mb-4">
          <span className="font-bold text-4xl">₹1000</span>
        </div>
        <p className="text-center text-lg text-gray-500">
          ( For 4 Candidates )
        </p>
      </div>

      {/* Group Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Group</h3>
        <ol className="list-decimal text-gray-600 text-lg text-start px-2">
          <li className="mb-2">Mechanical & Civil</li>
          <li className="mb-2">Electronics, Electrical, and Electronics & Telecommunication</li>
          <li className="mb-2">Computer, Information Technology, AIML, AIDS</li>
        </ol>
      </div>

      {/* Prizes */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Prizes</h3>
        <div className="text-lg text-gray-600 mb-4">
          <span className="font-bold">In each group, prizes will be:</span>
        </div>
        <ul className="list-inside list-disc text-lg text-gray-600 text-left">
          <li className="mb-2">
            <span className="font-bold">First Prize:</span> ₹25,000
          </li>
          <li className="mb-2">
            <span className="font-bold">Second Prize:</span> ₹15,000
          </li>
          <li className="mb-2">
            <span className="font-bold">Third Prize:</span> ₹10,000
          </li>
          <li className="mb-2">
            <span className="font-bold">Consolation Prize:</span> ₹5,000
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-xl text-gray-700">
        For any inquiries, please reach out to <span className="font-semibold">pratikruti2025@gmail.com</span>.
      </p>
    </div>
  </div>
);

export default Registration;
