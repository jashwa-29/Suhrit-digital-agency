import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import servicesdetails from './servicedata';


const Services = () => {


  return (
    <section id='services'>
      {/* Container */}
      <div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Title */}
        <div className="flex items-start flex-col gap-4 pb-14">
          <p className="text-[#e3d2bc] text-[16px] lg:text-[20px] tracking-[0.4px]">
            WHAT WE OFFER
          </p>
          <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">
            What We’re Offering Creative Digital Service
          </h2>
        </div>
        {/* Content */}
        <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
          {/* Map through services array */}
          {servicesdetails.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.id}`} // Navigate to the service detail page
              className="flex-col flex items-start justify-between border border-[#e6d6c2]  p-10 h-72 hover:bg-[#343230] hover:text-[#e6d6c2] transition"
            >
              <div className="flex w-full items-center justify-between">
                <h5 className="text-xl font-bold">{service.title}</h5>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Right Arrow"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
