import React from 'react';

const Footer = () => (
  <footer id='contact' className="bg-gray-900 text-white text-center py-4 min-h-[150px] max-h-auto w-full">
    <div className="container mx-auto px-4">

      <div className="flex flex-col md:flex-row justify-between items-center py-10 space-y-6 md:space-y-0">
        {/* Location Section */}
        <div className="venue text-sm md:text-base w-full md:w-1/2 lg:w-1/3 px-2">
          <div className="venueTitle font-bold pb-5 text-lg md:text-xl">Location</div>
          <div className="venueBody mt-2">
            YCCE, Nagpur, Maharashtra, India - 441110
          </div>
        </div>
        {/* Contact Section */}
        <div className="contact text-sm md:text-base w-full md:w-1/2 lg:w-1/3 px-2">
          <div className="locTitle font-bold pb-5 text-lg md:text-xl">Contact</div>
          <div className="locBody mt-2">
            Email: pratikruti2025@gmail.com <br />
            Website: www.pratikruti.in
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-600" />
      {/* Copyright */}
      <p className="text-xs md:text-sm lg:text-base mt-4">
        © {new Date().getFullYear()} Pratikruti-2025. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
