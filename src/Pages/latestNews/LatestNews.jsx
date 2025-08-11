import React from 'react'

const LatestNews = () => {
  return (
   <section className="py-16 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">New Office Opening</h3>
              <p className="text-gray-600 mb-4">
                We're excited to announce the opening of our new office in
                Dhaka, expanding our reach and capabilities.
              </p>
              <button className="text-amber-500 font-semibold hover:underline">
                Read More
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Awarded Best Startup</h3>
              <p className="text-gray-600 mb-4">
                Our company has been recognized as the best startup of the year
                for innovation and customer service.
              </p>
              <button className="text-amber-500 font-semibold hover:underline">
                Read More
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Upcoming Webinar</h3>
              <p className="text-gray-600 mb-4">
                Join our upcoming webinar to learn about the latest trends in
                technology and business growth strategies.
              </p>
              <button className="text-amber-500 font-semibold hover:underline">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default LatestNews