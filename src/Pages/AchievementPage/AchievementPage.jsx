import React from "react";

const AchievementPage = () => {
  return (
    <div className="">

      {/* Section 1: Achievement and Award */}
     <section className="pb-16 md:pb-32 pt-20 md:pt-40 ">
  <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div className="bg-gray-50 dark:bg-[#182432] shadow-lg rounded-2xl p-8">
      <h4 className="font-bold uppercase tracking-wider mb-2 text-amber-500">
        Achievement
      </h4>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 dark:text-[#ECF9FF] mb-4">
        Our Achievements and Awards
      </h2>
      <p className="text-gray-700 dark:text-[#ECF9FF]">
        Over the years, we have successfully completed over 500 projects across various industries, earning 120+ prestigious awards for innovation and excellence. Our commitment to delivering quality solutions has earned us the trust of 300+ satisfied clients worldwide.
      </p>
    </div>

    {/* Right Content */}
    <div>
      <p className="text-gray-700 dark:text-[#ECF9FF] mb-6">
        Our journey is marked by consistent growth and dedication to excellence. We focus on creating innovative, reliable, and scalable solutions that meet our clients' needs. Our team’s expertise and passion ensure every project is a success story.
      </p>
      <p className="text-gray-700 dark:text-[#ECF9FF]">
        We continue to push boundaries, setting new standards in quality and client satisfaction. Join us as we build the future with passion, precision, and purpose.
      </p>
   


            {/* Logos Row */}
            {/* <div className="flex flex-wrap items-center gap-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Quality_Circle_Logo.svg/1200px-Quality_Circle_Logo.svg.png"
                alt="QC"
                className="h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ultraman_logo.svg/1024px-Ultraman_logo.svg.png"
                alt="Ultra"
                className="h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mega_logo.svg/1024px-Mega_logo.svg.png"
                alt="Mega"
                className="h-12"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Hyper_Logo.svg/1024px-Hyper_Logo.svg.png"
                alt="Hyper"
                className="h-12"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Section 2: Statistics */}
      <section className="py-16  bg-gray-50 dark:bg-[#182432]">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-amber-500">500+</h3>
            <p className="text-gray-700 dark:text-[#ECF9FF]">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-amber-500">120+</h3>
            <p className="text-gray-700 dark:text-[#ECF9FF]">Awards Won</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-amber-500">300+</h3>
            <p className="text-gray-700 dark:text-[#ECF9FF]">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* New Section 3: Our Team */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet <span className="text-amber-500">Our Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80"
                alt="Team Member 1"
                className="mx-auto rounded-full h-40 w-40 object-cover mb-4"
              />
              <h4 className="font-bold text-lg">Alice Williams</h4>
              <p className="text-gray-700 dark:text-[#ECF9FF]">Event Manager</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80"
                alt="Team Member 2"
                className="mx-auto rounded-full h-40 w-40 object-cover mb-4"
              />
              <h4 className="font-bold text-lg">Robert Brown</h4>
              <p className="text-gray-700 dark:text-[#ECF9FF]">Guid Leader</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                alt="Team Member 3"
                className="mx-auto rounded-full h-40 w-40 object-cover mb-4"
              />
              <h4 className="font-bold text-lg">Jessica Lee</h4>
              <p className="text-gray-700 dark:text-[#ECF9FF]">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AchievementPage;
