import React from 'react';
import businessimg from '../assets/businessgrowth-img.png';
import check from '../assets/hex-check.svg.png';

const BusinessGrowth = () => {
  return (
    <section>
      <div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex justify-between items-center lg:flex-row flex-col lg:gap-0 gap-11">
          <div className="flex justify-center items-center lg:justify-start">
            <img
              src={businessimg}
              alt="Business Growth"
              className="w-full lg:w-[700px]"
            />
          </div>
          <div className="text-center lg:w-[600px] w-full  lg:text-left">
            <h2 className="text-[#636262] text-[16px] lg:text-[20px] font-[400] leading-[30px] tracking-[0.4px] font-jakarta">
              SUHRIT'S GROWTH
            </h2>
            <h2 className="font-jakarta font-[700] text-[40px] lg:text-[60px] leading-[48px] lg:leading-[72px] text-[#010212] pb-4 lg:pb-8 pt-2">
              Your Trusted Digital <br />
              Growth Partner
            </h2>
            <p className="font-Kumbh text-[16px] lg:text-[18px] font-[500] text-[#010212] leading-[28px] lg:leading-[34px]">
              Suhrit is committed to transforming digital challenges into opportunities. With a passion for innovation and creativity, we specialize in bringing impactful digital solutions to life. Whether you're a startup or an established brand, we're here to help you grow.
            </p>
            <div className="flex flex-wrap lg:flex-row gap-8 py-8 justify-center lg:justify-start">
              <div className="w-[200px] h-[165px] rounded-[3px] drop-shadow-lg bg-[#FFFFFF] p-5 flex flex-col items-start justify-center gap-2">
                <img src={check} alt="Check" className="w-[32px]" />
                <p className="font-Kumbh font-[500] text-[20px] leading-[34px] text-[#010212]">
                  Digital Marketing <br /> for Entrepreneurs
                </p>
              </div>
              <div className="w-[200px] h-[165px] rounded-[3px] drop-shadow-lg bg-[#FFFFFF] p-5 flex flex-col items-start justify-center gap-2">
                <img src={check} alt="Check" className="w-[32px]" />
                <p className="font-Kumbh font-[500] text-[20px] leading-[34px] text-[#010212]">
                  Web Development <br />
                  Solutions
                </p>
              </div>
            </div>
            <h2 className="font-[500] text-[20px] leading-[34px] font-Kumbh text-[#010212]">
              We Create & Build Custom Websites
            </h2>
            <p className="font-Kumbh text-[16px] lg:text-[18px] leading-[28px] lg:leading-[34px] font-500 pt-5">
              Suhrit's web development expertise focuses on building responsive, user-friendly, and functional websites that align with your business goals. Whether you're looking to build a brand new site or revamp an existing one, we ensure that the final product represents your vision perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;
