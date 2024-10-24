import React from 'react'
import businessimg from '../assets/businessgrowth-img.png'
import check from '../assets/hex-check.svg.png'

const BusinessGrowth = () => {
  return (
    <section>
                    <div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="flex justify-between items-center lg:flex-row flex-col lg:gap-0 gap-11 ">
          <div className="flex justify-center items-center lg:justify-start">
            <img
              src={businessimg}
              alt=""
              className="w-full lg:w-[700px]"
            />
          </div>
          <div className=" text-center lg:text-left">
            <h2 className="text-[#636262] text-[16px] lg:text-[20px] font-[400] leading-[30px] tracking-[0.4px] font-jakarta">
              BUSINESS GROWTH
            </h2>
            <h2 className="font-jakarta font-[700] text-[40px] lg:text-[60px] leading-[48px] lg:leading-[72px] text-[#010212] pb-4 lg:pb-8 pt-2">
              Best Digital <br />
              Creative Agency
            </h2>
            <p className="font-Kumbh text-[16px] lg:text-[18px] font-[500] text-[#010212] leading-[28px] lg:leading-[34px]">
              There are many variations of passages of lorem in free market to{" "}
              <br className="hidden lg:block" />
              available, but the majority have suffered alteration in some form,
              by <br className="hidden lg:block" />
              injected humour, or randomised words
            </p>
            <div className="flex flex-wrap lg:flex-row gap-8 py-8 justify-center lg:justify-start">
              <div className="w-[200px] h-[165px] rounded-[3px] drop-shadow-lg bg-[#FFFFFF] p-5 flex flex-col items-start justify-center gap-2">
                <img src={check} alt="" className="w-[32px]" />
                <p className="font-Kumbh font-[500] text-[20px] leading-[34px] text-[#010212]">
                  For marketing <br /> professionals
                </p>
              </div>
              <div className="w-[200px] h-[165px] rounded-[3px] drop-shadow-lg bg-[#FFFFFF] p-5 flex flex-col items-start justify-center gap-2">
                <img src={check} alt="" className="w-[32px]" />
                <p className="font-Kumbh font-[500] text-[20px] leading-[34px] text-[#010212]">
                  Event Marketing <br />
                  Opportunity
                </p>
              </div>
            </div>
            <h2 className="font-[500] text-[20px] leading-[34px] font-Kumbh text-[#010212]">
              We Design & Build Powerful Websites
            </h2>
            <p className="font-Kumbh text-[16px] lg:text-[18px] leading-[28px] lg:leading-[34px] font-500 pt-5">
              Variations of passages of lorem in free market to available, but
              the <br className="hidden lg:block" />
              majority have suffered alteration in some form, by injected
              humour, <br className="hidden lg:block" />
              or randomised words
            </p>
          </div>
        </div>

                    </div>
    </section>
  )
}

export default BusinessGrowth