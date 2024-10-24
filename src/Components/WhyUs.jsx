import React from 'react'
import whyusimg from '../assets/whyus-img.png'

const WhyUs = () => {
  return (
    <header>
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
          Sed lectus vestibulum mattis ullamcorper velit sed ullamcorperbi. Fusce id velit ut tortor pretium viverra suspendisse fuis ultricies lacus sed turpis tincidunt id aliquet. Sed viverra tellus sed lectus vestibulum mattis
          </p>
         
          {/* Info */}
          <ul className="flex items-center gap-4">
            <li className="mr-16">
              <h3 className="text-2xl font-bold md:text-3xl">657</h3>
              <p className="text-sm text-gray-500">Projects 
              Completed</p>
            </li>
            <li className="mr-16">
              <h3 className="text-2xl font-bold md:text-3xl">67K+</h3>
              <p className="text-sm text-gray-500">Satisfied 
              Clients</p>
            </li>
            <li className="mr-16">
              <h3 className="text-2xl font-bold md:text-3xl">1M+</h3>
              <p className="text-sm text-gray-500">Expert 
              Teams</p>
            </li>
          </ul>
        </div>
        {/* Hero Image */}
        <div>
          <img
            src={whyusimg}
            alt=""
            className="h-full w-full max-w-2xl object-cover"
          />
        </div>
      </div>
    </div>
  </header>

  )
}

export default WhyUs
