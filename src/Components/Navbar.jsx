import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import servicesdetails from './servicedata';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobile(false);
  }, [location]);

  const handleServiceButtonClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleServiceClick = (id) => {
    setIsDropdownOpen(false);
    navigate(`/services/${id}`);
  };

  return (
    <header className={`${isScrolled ? 'fixed bg-white shadow-md' : 'absolute bg-transparent'} inset-x-0 top-0 z-50 transition-all ease-linear`}>
      <div className='lg:w-11/12 w-full mx-auto'>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" className={`flex text-[22px] font-semibold font-mono ${isScrolled ? 'text-black' : 'text-white'}`} aria-label="Home">
                Suhrit
              </Link>
            </div>
            <button
              type="button"
              className={`inline-flex p-2 transition-all duration-200 rounded-md lg:hidden ${isScrolled ? 'text-black' : 'text-white'} focus:bg-gray-100 hover:bg-gray-100`}
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobile(!isMobile)}
            >
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <nav className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10" aria-label="Main menu">
              <Link to="/" className={`text-base font-semibold transition-all duration-200 hover:text-[#e3d2bc] ${isScrolled ? 'text-black' : 'text-white'}`} aria-label="Home">HOME</Link>
              <Link to="/about" className={`text-base font-semibold transition-all duration-200 hover:text-[#e3d2bc] ${isScrolled ? 'text-black' : 'text-white'}`} aria-label="About us">ABOUT US</Link>

              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                  type="button"
                  className={`inline-flex justify-center text-base font-semibold transition-all duration-200 hover:text-[#e3d2bc] ${isScrolled ? 'text-black' : 'text-white'}`}
                  aria-label="Services"
                  onClick={handleServiceButtonClick}
                  aria-expanded={isDropdownOpen}
                >
                  SERVICES
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-[-200px] z-10 mt-2 w-[420px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300">
                    <div className="py-1 grid grid-cols-2 gap-2" role="menu" aria-orientation="vertical">
                      {servicesdetails.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#e3d2bc] hover:text-black transition-colors duration-200"
                          onClick={() => handleServiceClick(service.id)}
                          role="menuitem"
                          tabIndex={0} // Allow keyboard navigation
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/blog" className={`text-base font-semibold transition-all duration-200 hover:text-[#e3d2bc] ${isScrolled ? 'text-black' : 'text-white'}`} aria-label="Blog">BLOG</Link>
            </nav>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full border-[1px] hover:bg-[#e3d2bc] hover:border-[#e3d2bc] hover:text-black ease-in-out ${isScrolled ? 'text-black border-black' : 'text-white border-white'}`}
                aria-label="Contact us"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden flex flex-col items-center justify-center gap-3 bg-white w-full h-auto py-7 fixed top-16 left-0 transition-transform duration-500 text-black ${isMobile ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Mobile menu">
          <Link to="/" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">HOME</Link>
          <Link to="/about" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">ABOUT US</Link>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              className={`inline-flex justify-center text-base font-semibold transition-all duration-200 hover:text-[#e3d2bc] ${isScrolled ? 'text-black' : 'text-black'}`}
              aria-label="Services"
              onClick={handleServiceButtonClick}
              aria-expanded={isDropdownOpen}
            >
              SERVICES
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300">
                <div className="py-1 grid grid-cols-2 gap-2" role="menu" aria-orientation="vertical">
                  {servicesdetails.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#e3d2bc] hover:text-black transition-colors duration-200"
                      onClick={() => handleServiceClick(service.id)}
                      role="menuitem"
                      tabIndex={0}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/blog" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">BLOGS</Link>
          <Link to="/contact" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">CONTACT</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
