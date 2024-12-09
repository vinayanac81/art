import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm">
                Discover a world of color and creativity with our premium
                quality color pencils. Perfect for artists, designers, and
                hobbyists of all ages.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#shop"
                    className="hover:underline hover:text-yellow-300"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:underline hover:text-yellow-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:underline hover:text-yellow-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:underline hover:text-yellow-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-sm mb-4">
                Email:{" "}
                <a href="mailto:info@colorpencils.com" className="underline">
                  info@colorpencils.com
                </a>
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-yellow-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.837v-3.622h2.982V8.413c0-2.946 1.795-4.553 4.415-4.553 1.254 0 2.335.093 2.65.135v3.072h-1.822c-1.43 0-1.705.68-1.705 1.677v2.198h3.409l-.445 3.622h-2.964V24h5.803C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-300"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.861 9.861 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.944 13.944 0 011.671 3.15a4.917 4.917 0 001.523 6.573A4.897 4.897 0 01.96 9.07v.061a4.916 4.916 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.918 4.918 0 004.6 3.42A9.867 9.867 0 010 21.543a13.905 13.905 0 007.548 2.212c9.057 0 14.01-7.502 14.01-14.01 0-.213-.004-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-yellow-300"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.258 3.608-1.32 1.266-.058 1.645-.07 4.85-.07m0-2.163C8.735 0 8.332.012 7.052.07 5.772.128 4.507.392 3.467 1.432c-1.04 1.04-1.304 2.305-1.362 3.585C2.012 8.332 2 8.735 2 12s.012 3.668.07 4.948c.058 1.28.322 2.545 1.362 3.585 1.04 1.04 2.305 1.304 3.585 1.362C8.332 21.988 8.735 22 12 22s3.668-.012 4.948-.07c1.28-.058 2.545-.322 3.585-1.362 1.04-1.04 1.304-2.305 1.362-3.585.058-1.28.07-1.683.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.322-2.545-1.362-3.585-1.04-1.04-2.305-1.304-3.585-1.362C15.668.012 15.265 0 12 0zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.326a4.163 4.163 0 110-8.326 4.163 4.163 0 010 8.326zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 border-t border-white pt-4">
            <p className="text-sm">© 2024 ColorPencil. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
