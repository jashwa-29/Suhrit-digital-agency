import React from 'react'
import whyusimg from '../assets/whyus-img.png'

const WhyUs = () => {
  return (
<section>
  {/* Container */}
  <div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
    {/* Component */}
    <div className="flex flex-col gap-8 items-center lg:justify-between justify-center sm:gap-20 lg:flex-row-reverse">
      <div className="lg:w-6/12 w-full">
        <p className="text-[#e3d2bc] text-[16px] lg:text-[20px] py-3 lg:py-5 tracking-[0.4px]">
          WHY US
        </p>
        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          We Give You Digital Solutions
        </h1>
        <p className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8">
          Our team provides cutting-edge digital solutions tailored to drive success. With expertise across various digital domains, we deliver strategies that enhance user engagement, improve visibility, and maximize conversions.
        </p>
        <p className="mb-6 text-sm text-gray-500 sm:text-xl lg:mb-8">
          From search engine optimization to content creation, social media marketing, and tech consulting, we are dedicated to helping you achieve impactful digital growth.
        </p>
        
        {/* Info */}
        <ul className="flex items-center gap-4">
          <li className="mr-16">
            <h3 className="text-2xl font-bold md:text-3xl">657</h3>
            <p className="text-sm text-gray-500">Projects Completed</p>
          </li>
          <li className="mr-16">
            <h3 className="text-2xl font-bold md:text-3xl">67K+</h3>
            <p className="text-sm text-gray-500">Satisfied Clients</p>
          </li>
          <li className="mr-16">
            <h3 className="text-2xl font-bold md:text-3xl">1M+</h3>
            <p className="text-sm text-gray-500">Engagements Driven</p>
          </li>
        </ul>
      </div>
      {/* Hero Image */}
      <div className="lg:w-6/12 w-full flex justify-center lg:justify-end">
        <img
          src={whyusimg}
          alt="Why Choose Us"
          className="h-full w-full max-w-2xl object-cover"
        />
      </div>
    </div>
  </div>
</section>



  )
}

export default WhyUs
