import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
       <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-gray-800">
            ART
          </a>

          {/* Search Bar (Hidden on mobile) */}
          <div className="hidden md:flex w-1/2 md:justify-center flex-grow mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-1/2  px-4 py-2 border border-blue-800 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </div>

          {/* Navigation Links (Hidden on mobile) */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Search Bar */}
            <div className="flex items-center space-x-2 px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Search
              </button>
            </div>

            {/* Navigation Links */}
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
    
    </>
  );
}

export default Header;
