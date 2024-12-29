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


            {/* Reg Details */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Details</h3>
        <ol className="list-decimal text-gray-600 text-lg text-start px-2">
          <li className="mb-2">Group consist of 4 members </li>
          <li className="mb-2">Entry fee include kit Icard, participation certificate and lunch</li>
          <li className="mb-2">Additional members 200 per member</li>
        </ol>
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

        {/* Register Button */}
        <div className="text-center mt-10">
      <a
        href="https://forms.gle/DTq7Te4kmmarSrvS8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#4DA1A9] rounded-3xl shadow-2xl hover:bg-[#33767c] hover:scale-105 active:bg-[#4DA1A9] focus:outline-4 focus:ring-4 focus:bg-[#2E5077] transition-all duration-300"
      >
        Register Now
      </a>
    </div>

    <div className="mt-12 text-center">
      <p className="text-xl text-gray-700">
        For any inquiries, please reach out to <span className="font-semibold">pratikruti2025@gmail.com</span>.
      </p>
    </div>
  </div>
);

export default Registration;
