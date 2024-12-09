import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center py-12">
            {/* Text Content */}
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">
                Explore Your Creativity
              </h1>
              <p className="text-lg text-white mb-6">
                Discover the finest collection of vibrant color pencils to bring
                your imagination to life. Perfect for artists of all ages and
                skills.
              </p>
              <a
                href="#shop"
                className="inline-block px-6 hover:bg-blue-700 hover:text-white py-3 bg-white text-purple-600 font-semibold rounded-md shadow-md "
              >
                VIEW ALL PROJECTS
              </a>
            </div>

            {/* Image */}
            <div className="mt-8 md:mt-0 md:w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-ZVDoxvGZqfjEK2LjrAt6ga_XKLTLpRwEw&s"
                alt="Color Pencils"
                className="rounded-lg hover:opacity-75 transition duration-300 shadow-lg w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
