import React from 'react';

function TourTypesSection() {
  const tourTypes = [
    {
      id: 1,
      name: "Discovery",
      toursCount: 7,
      icon: (
        <svg className="w-16 h-16 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      id: 2,
      name: "Camping",
      toursCount: 7,
      icon: (
        <svg className="w-16 h-16 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l-9 5 9 5 9-5-9-5zM12 14v7"></path>
        </svg>
      )
    },
    {
      id: 3,
      name: "Cable car",
      toursCount: 6,
      icon: (
        <svg className="w-16 h-16 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m0 0h14m-7 0v-6a2 2 0 012-2h2a2 2 0 012 2v6M12 10V5m0 0l-3 3m3-3l3 3"></path>
        </svg>
      )
    },
    {
      id: 4,
      name: "Sailboat",
      toursCount: 11,
      icon: (
        <svg className="w-16 h-16 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 12H5.092A2.25 2.25 0 003 14.204V18.75a.75.75 0 00.75.75H12a.75.75 0 00.75-.75v-4.546A2.25 2.25 0 0010.908 12H10zM12 12V3"></path>
        </svg>
      )
    },
    {
      id: 5,
      name: "Climbing",
      toursCount: 8,
      icon: (
        <svg className="w-16 h-16 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 4 4M5 12h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"></path>
        </svg>
      )
    },
    {
      id: 6,
      name: "Beach",
      toursCount: 6,
      icon: (
        <svg className="w-16 h-16 text-amber-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-100 dark:bg-[#1D232A] py-32">
        <div className='container'>

      
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-[#ECF9FF] mb-4">Types of tours</h2>
        <p className="text-gray-600 dark:text-[#ECF9FF] mb-12">Explore the tours chosen and recommended by a multitude of travelers.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tourTypes.map(type => (
            <div key={type.id} className="flex flex-col items-center p-6 dark:bg-[#1D232A] bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              {type.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-[#ECF9FF] mb-1">{type.name}</h3>
              <p className="text-gray-600 dark:text-[#ECF9FF] text-sm">{type.toursCount} tours</p>
            </div>
          ))}
        </div>
      </div>
        </div>
    </section>
  );
}

export default TourTypesSection;
