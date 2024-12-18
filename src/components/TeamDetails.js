import React from 'react';

const TeamDetails = () => {
  const patrons = [
    { name: 'Hon. Dattaji Meghe', role: 'Chairman, NYSS', image: 'path_to_image1.jpg' },
    { name: 'Hon. Ravi D. Meghe', role: 'Secretary, NYSS', image: 'path_to_image2.jpg' },
    { name: 'Hon. Sameer Meghe', role: 'Treasurer, NYSS', image: 'path_to_image2.jpg' },
    { name: 'Dr. M.M. Ksirsagar', role: 'Technical Director and Advisor', image: 'path_to_image2.jpg' },
  ];

  const organizers = [
    { name: 'Dr. U.P.Waghe', role: 'Organizer', image: 'path_to_image3.jpg' },
    { name: 'Dr. S.S. Chaudhari', role: 'Project Coordinator', image: 'path_to_image4.jpg' },
    { name: 'Dr. J.P. Giri', role: 'Organizer', image: 'path_to_image5.jpg' },
  ];

  const conveyors = [
    { name: 'Dr. S.G. Mahakalkar', role: 'Conveyor', image: 'path_to_image6.jpg' },
    { name: 'Dr. R.B. Chadge', role: 'Conveyor', image: 'path_to_image7.jpg' },
  ];

  const technicalConveyors = [
    { name: 'Prof. A.R. Narkhede', role: 'Technical Conveyor', image: 'path_to_image8.jpg' },
    { name: 'Prof. R.V.Adkane', role: 'Technical Conveyor', image: 'path_to_image9.jpg' },
    { name: 'Prof. P.A. Hatwalne', role: 'Technical Conveyor', image: 'path_to_image9.jpg' },
  ];

  const coConveyors = [
    { name: 'Prof. Y.Y. Nandurkar (ME)', role: 'Co-Conveyor', image: 'path_to_image10.jpg' },
    { name: 'Prof. Sagar Dhengare (CE)', role: 'Co-Conveyor', image: 'path_to_image11.jpg' },
    { name: 'Prof. Ajay Thatere (EE)', role: 'Co-Conveyor', image: 'path_to_image11.jpg' },
    { name: 'Prof. Atul Lilhare (EL)', role: 'Co-Conveyor', image: 'path_to_image11.jpg' },
    { name: 'Prof. Nilesh U. Sambe (CT)', role: 'Co-Conveyor', image: 'path_to_image11.jpg' },
    { name: 'Dr. Priyanka Jaiswal (IT)', role: 'Co-Conveyor', image: 'path_to_image11.jpg' },
    { name: 'Prof. Abhishek Madankar (ETC)', role: 'Co-Conveyor', image: 'path_to_image11.jpg' },
    { name: 'Prof. R. Ponmalar (CSE)', role: 'Co-Conveyor', image: 'path_to_image11.jpg' },
  ];

  return (
    <div id="team-details" className="bg-gray-100 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>

      {/* Patrons Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-8">Patrons</h3>
        <div className="flex justify-center space-x-8">
          {patrons.map((patron, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img src={patron.image} alt={patron.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">{patron.name}</h4>
              <p className="text-sm text-gray-500">{patron.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizers Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-8">Organizers & Project Coordinators</h3>
        <div className="flex justify-center space-x-8">
          {organizers.map((organizers, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img src={organizers.image} alt={organizers.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">{organizers.name}</h4>
              <p className="text-sm text-gray-500">{organizers.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conveyors Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-8">Conveyors</h3>
        <div className="flex justify-center space-x-8">
          {conveyors.map((conveyors, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img src={conveyors.image} alt={conveyors.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">{conveyors.name}</h4>
              <p className="text-sm text-gray-500">{conveyors.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Conveyors Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-8">Technical Conveyors</h3>
        <div className="flex justify-center space-x-8">
          {technicalConveyors.map((technicalConveyors, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img src={technicalConveyors.image} alt={technicalConveyors.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">{technicalConveyors.name}</h4>
              <p className="text-sm text-gray-500">{technicalConveyors.role}</p>
            </div>
          ))}
        </div>
      </div>

{/* Co-Conveyors Section */}
<div className="text-center mb-12">
  <h3 className="text-3xl font-semibold mb-8">Co-Conveyors</h3>
  <div className="flex flex-wrap justify-center gap-8">
    {coConveyors.map((coConveyor, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
        <img
          src={coConveyor.image}
          alt={coConveyor.name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800">{coConveyor.name}</h4>
        <p className="text-sm text-gray-500">{coConveyor.role}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default TeamDetails;
