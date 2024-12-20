import React from 'react';

const Footer = () => (
  <footer id='contact' className="bg-[#2E5077] text-white text-center py-4 min-h-[150px] max-h-auto w-full">
    <div className="container mx-auto px-4 ">

      <div className="flex flex-col md:flex-row justify-around items-start py-10 space-y-6 md:space-y-0">
        {/* Location Section */}
        <div className="venue text-sm md:text-base w-full md:w-1/2 lg:w-1/3 px-2">
          <div className="venueTitle font-bold pb-2 text-lg md:text-2xl">Location</div>
          <div className="venueBody mt-2 space-y-5">
          <i className="fa-solid fa-location-dot"></i> YCCE, Nagpur, Maharashtra, India - 441 110
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.218099781244!2d78.97765083859485!3d21.095168945142724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4952117eaac51%3A0x6d8277793eb63d6a!2sYeshwantrao%20Chavan%20College%20of%20Engineering%20(YCCE)%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1734627176455!5m2!1sen!2sin"
              width="100%"  // Makes it responsive
              height="150"  // Adjust the height as needed
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/* Contact Section */}
        <div className="contact text-sm md:text-base w-full md:w-1/2 lg:w-1/3 px-2">
          <div className="locTitle font-bold pb-5 text-lg md:text-2xl">Contact</div>
          <div className="locBody mt-2 space-y-5">
            <i className="fa-solid fa-phone"></i> Phone: 9764478622 (Prof. A. P. Edlabadkar)<br />
            <i className="fa-solid fa-envelope"></i> Email: pratikruti2025@gmail.com <br />
            <i className="fa-solid fa-globe"></i>  Website: <a href="http://www.pratikruti.in" target="_blank" rel="noopener noreferrer">www.pratikruti.in</a>
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
