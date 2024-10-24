import React from 'react'
import team from '../assets/team.png'

const OurTeam = () => {
  return (
    <section>
              <div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <p className="font-jakarta text-[16px] font-500 text-[#636262] leading-[34px]">
              THE TEAM
            </p>
            <h2 className="font-jakarta font-[700] text-[40px] sm:text-[50px] md:text-[60px] leading-[50px] sm:leading-[60px] md:leading-[72px] text-[#010212] pt-3">
              Meet Our Team Crew of <br /> Experts
            </h2>
          </div>

          <div>
            <div className="flex flex-wrap h-auto w-full justify-center gap-[20px] sm:gap-[30px] pt-8 sm:pt-16">
              <img src={team} alt="" className="md:w-[350px] w-full" />
              <img src={team} alt="" className="md:w-[350px] w-full" />
              <img src={team} alt="" className="md:w-[350px] w-full" />
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-[40px] md:gap-[100px] pt-8 sm:pt-12">
              <div>
                <p className="text-[#010212] font-Kumbh font-400 text-[18px] sm:text-[20px] md:text-[24px] leading-[30px] sm:leading-[32px] md:leading-[34px] ">
                  You need to be sure there isn't anything embarrassing hidden
                  in the <br />
                  middle of text notted adipisicing elit sed do uspendisse
                </p>
              </div>
              <div className="w-full sm:w-auto h-[55px] rounded-[35px] bg-[#343230] flex justify-center">
                <button className="text-[#FFFFFF] font-[500] text-[16px] font-Kumbh leading-[55px] w-full sm:w-[181.33px]">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default OurTeam