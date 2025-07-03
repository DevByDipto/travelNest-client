import React from 'react';

function TestimonialSection() {
  // Real-like data for testimonials
  const testimonials = [
    {
      id: 1,
      text: "TravelNest made planning our trip to Cox's Bazar so easy! Everything was perfectly organized, from the flights to the hotel. We had an unforgettable experience on the beautiful beach.",
      author: "Annette Black",
      title: "CEO Themesflat",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real avatar image
    },
    {
      id: 2,
      text: "Our Bandarban adventure with TravelNest was incredible. The guides were knowledgeable, and the scenery was breathtaking. It was truly an immersive cultural experience.",
      author: "Jane Doe",
      title: "Traveler",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real avatar image
    },
    {
      id: 3,
      text: "Sajek Valley was a dream come true, thanks to TravelNest. Waking up above the clouds was magical. The entire trip was seamless and highly recommended!",
      author: "John Smith",
      title: "Adventurer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real avatar image
    },
    {
      id: 4,
      text: "The Sylhet Tea Garden Getaway was exactly what we needed. Peaceful, beautiful, and so relaxing. TravelNest handled all the details perfectly.",
      author: "Emily White",
      title: "Nature Lover",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real avatar image
    },
    {
      id: 5,
      text: "Saint Martin’s Island Escape was a paradise! The clear waters and vibrant marine life were amazing. TravelNest ensured a smooth and enjoyable journey.",
      author: "David Green",
      title: "Beach Enthusiast",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cfd867be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Real avatar image
    }
  ];

  // State to manage the current active testimonial for a simple carousel
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What they say!</h2>
        <p className="text-gray-600 mb-12">Hear from our happy travelers about their amazing experiences with TravelNest.</p>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Content */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {testimonials[currentTestimonialIndex].text}
            </p>
            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentTestimonialIndex].avatar}
                alt={testimonials[currentTestimonialIndex].author}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-amber-500"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/E0F2F7/000000?text=Avatar`; }}
              />
              <h4 className="text-xl font-semibold text-gray-900">{testimonials[currentTestimonialIndex].author}</h4>
              <p className="text-amber-600 text-sm">{testimonials[currentTestimonialIndex].title}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            {/* Dots for navigation */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonialIndex ? 'bg-amber-600' : 'bg-gray-300 hover:bg-gray-400'
                  } transition duration-200`}
                ></button>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
