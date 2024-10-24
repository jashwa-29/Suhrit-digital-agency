import React from 'react'
import right from '../assets/Right.jpg'

const GetToKnowUs = () => {
  return (
    <div>
      <section className="lg:w-11/12 w-full mx-auto  font-jakarta flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-20 lg:px-8 px-4">
        <div className=" px-4 lg:px-0 text-center lg:text-left">
          <p className="text-[#e3d2bc] text-[16px] lg:text-[20px] py-3 lg:py-5 tracking-[0.4px]">
            GET TO KNOW US
          </p>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-[700] leading-tight lg:leading-[70.4px] w-full lg:w-[800px] pb-4 lg:pb-5">
            Why We’re The Best Match For Your <br className="hidden lg:block" />
            Business!!
          </h2>
          <p className="text-[#636262] leading-[24px] tracking-[0.2px] pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis rerum placeat <br className="hidden lg:block" />
            fugiat necessitatibus ullam accusamus quisquam ipsa voluptates vel
            odio?
          </p>
          <button className="w-[150px] md:w-[194px] h-[50px] md:h-[70px] rounded-[130px] gap-10 border-2 border-black text-[16px] md:text-[18px] leading-[18px] font-[700] hover:bg-[#e3d2bc] hover:border-[#e3d2bc] hover:text-black ease-in-out">
            Discover More
          </button>
        </div>
        <div className="mt-10 lg:mt-0 flex  lg:justify-end  lg:px-0">
          <img className="w-[100%]" src={right} alt="Right graphic" />
        </div>
      </section>
    </div>
  )
}

export default GetToKnowUs
