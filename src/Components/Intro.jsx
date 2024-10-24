import React from "react";

const Intro = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-10 md:py-20">
      <div className="text-[#010212] text-center ">
        <h2 className="font-Domine text-[32px] sm:text-[48px] md:text-[64px] font-[700] leading-[40px] sm:leading-[56px] md:leading-[72px]">
          An agency like no <br />
          other. Results to match.
        </h2>
        <p className="font-Kumbh text-[16px] sm:text-[20px] md:text-[24px] font-[400] leading-[28px] sm:leading-[34px] md:leading-[42px] pt-4 sm:pt-6 lg:w-[680px] w-full mx-auto">
          We work with forward-thinking companies to craft and produce impactful
          solutions through website & mobile app experiences. You will work
          closely with skilled Dolor in reprehenderit in voluptate velit esse
          cillum.
        </p>
      </div>

      <div className="h-auto w-full flex justify-center items-center pt-16 md:pt-28 text-center">
        <div className="w-full lg:max-w-[1170px] lg:h-[261px]  rounded-[5px] text-[#FFFFFF] bg-[#343230] flex flex-col md:flex-row md:gap-0 gap-5 justify-around items-center py-6 md:py-0">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-Domine text-[48px] sm:text-[60px] leading-[56px] sm:leading-[72px] font-[700]">
              10k+
            </h2>
            <p className="font-Kumbh font-[500] leading-[34px] text-[18px] sm:text-[20px]">
              EXPERIENCED DESIGNERS
            </p>
            <p className="font-Kumbh font-[400] text-[14px] sm:text-[16px] leading-[34px]">
              Our company has 100 expert
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-Domine text-[48px] sm:text-[60px] leading-[56px] sm:leading-[72px] font-[700]">
              10k+
            </h2>
            <p className="font-Kumbh font-[500] leading-[34px] text-[18px] sm:text-[20px]">
              SATISFIED CUSTOMERS
            </p>
            <p className="font-Kumbh font-[400] text-[14px] sm:text-[16px] leading-[34px]">
              Our company satisfied customer
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-Domine text-[48px] sm:text-[60px] leading-[56px] sm:leading-[72px] font-[700]">
              120k+
            </h2>
            <p className="font-Kumbh font-[500] leading-[34px] text-[18px] sm:text-[20px]">
              COMPLETED CASES
            </p>
            <p className="font-Kumbh font-[400] text-[14px] sm:text-[16px] leading-[34px]">
              We have done 1200 Cases
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
