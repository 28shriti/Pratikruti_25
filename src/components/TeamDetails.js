import React from 'react';

const TeamDetails = () => {
  const patrons = [
    { name: 'Hon. Dattaji Meghe', role: 'Chairman, NYSS', image: '/patrons/dattaji.jpg' },
    { name: 'Hon. Ravi D. Meghe', role: 'Secretary, NYSS', image: '/patrons/ravimeghe.jpg' },
    { name: 'Hon. Sameerji Meghe', role: 'Treasurer, NYSS', image: '/patrons/sameermeghe.jpg' },
    { name: 'Hon. Vrindatai Meghe', role: 'Chief Advisor, NYSS', image: '/patrons/vrindatai.jpg' },
    { name: 'Dr. M. M. Ksirsagar', role: 'Technical Director and Advisor', image: '/patrons/ManaliKshirsagar.jpg' },
  ];

  const organizers = [
    { name: 'Dr. U. P. Waghe', role: 'Organizer', image: '/organizers/upwaghe.png' },
    { name: 'Dr. S. S. Chaudhari', role: 'Project Coordinator', image: '/organizers/sharadChaudhari.jpg' },
    { name: 'Dr. J. P. Giri', role: 'Organizer', image: '/organizers/jayantGiri.png' },
  ];

  const conveyors = [
    { name: 'Dr. S. G. Mahakalkar', role: 'Conveyor', image: '/conveyors/sachineMahakalkar.jpeg' },
    { name: 'Dr. R. B. Chadge', role: 'Conveyor', image: '/conveyors/rajkumarChadge.jpg' },
  ];

  const publicityChair = [
    { name: 'Prof. A. P. Edlabadkar', role: 'Publicity Chair', image: '/publicityChair/A_P_Edlabadkar.png' },
  
  ];

  const OrganizingSecretary = [
    { name: 'Dr. S. S. Khedkar', role: 'Organizing Secretary', image: '/OrganizingSecretary/sskhedekar.jpg' },
  
  ];

  const technicalConveyors = [
    { name: 'Prof. A. R. Narkhede', role: 'Technical Conveyor', image: 'techConveyors/alokNarkhede.jpg' },
    { name: 'Prof. R. V. Adkane', role: 'Technical Conveyor', image: 'techConveyors/rakeshAdakane.jpg' },
    { name: 'Prof. P. A. Hatwalne', role: 'Technical Conveyor', image: 'techConveyors/prasadHatwalne.png' },
  ];

  const coConveyors = [
    { name: 'Prof. Y. Y. Nandurkar (ME)', role: 'Co-Conveyor', image: 'coConveyors/yogeshNandurkar.jpg' },
    { name: 'Prof. Sagar Dhengare (CE)', role: 'Co-Conveyor', image: 'coConveyors/sagarDhengare.jpg' },
    { name: 'Prof. Ajay Thatere (EE)', role: 'Co-Conveyor', image: 'coConveyors/ajayThatere.jpg' },
    { name: 'Prof. Atul Lilhare (EL)', role: 'Co-Conveyor', image: 'coConveyors/atulLilhare.jpg' },
    { name: 'Prof. Nilesh U. Sambe (CT)', role: 'Co-Conveyor', image: 'coConveyors/nileshSambhe.jpg' },
    { name: 'Dr. Priyanka Jaiswal (IT)', role: 'Co-Conveyor', image: 'coConveyors/priyankaJaiswal.jpg' },
    { name: 'Prof. Abhishek Madankar (ETC)', role: 'Co-Conveyor', image: 'coConveyors/AbhishekMadankar.jpeg' },
    { name: 'Prof. R. Ponmalar (CSE)', role: 'Co-Conveyor', image: 'coConveyors/Rponmalar.jpg' },
  ];

  return (
    <div id="team-details" className="bg-gray-200 py-8 md:py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Organizing Committee</h2>

      {/* Patrons Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-4 md:mb-8">Patrons</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {patrons.map((patron, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img
                src={patron.image}
                alt={patron.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{patron.name}</h4>
              <p className="text-sm text-gray-500">{patron.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizers Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-4 md:mb-8">Organizers & Project Coordinators</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {organizers.map((organizer, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img
                src={organizer.image}
                alt={organizer.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{organizer.name}</h4>
              <p className="text-sm text-gray-500">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conveyors Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-4 md:mb-8">Conveyors</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {conveyors.map((conveyor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img
                src={conveyor.image}
                alt={conveyor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{conveyor.name}</h4>
              <p className="text-sm text-gray-500">{conveyor.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* publicity Chair Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-4 md:mb-8">Publicity Chair</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {publicityChair.map((publicityChair, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img
                src={publicityChair.image}
                alt={publicityChair.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{publicityChair.name}</h4>
              <p className="text-sm text-gray-500">{publicityChair.role}</p>
            </div>
          ))}
        </div>
      </div>

      

      {/* Organizing Secretary Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-4 md:mb-8">Organizing Secretary</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {OrganizingSecretary.map((OrganizingSecretary, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img
                src={OrganizingSecretary.image}
                alt={OrganizingSecretary.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{OrganizingSecretary.name}</h4>
              <p className="text-sm text-gray-500">{OrganizingSecretary.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Conveyors Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-4 md:mb-8">Technical Conveyors</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {technicalConveyors.map((technicalConveyor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-60">
              <img
                src={technicalConveyor.image}
                alt={technicalConveyor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{technicalConveyor.name}</h4>
              <p className="text-sm text-gray-500">{technicalConveyor.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Co-Conveyors Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold mb-4 md:mb-8">Co-Conveyors</h3>
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

