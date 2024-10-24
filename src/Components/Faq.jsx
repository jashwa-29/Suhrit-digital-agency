import React, { useState } from 'react';
import shape from '../assets/shape-12.svg fill.png';

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Accordion content array
  const accordionData = [
    {
      title: "What is your refund policy?",
      content:
        "We offer a full refund within 30 days of purchase. If you're not satisfied, please contact our support.",
    },
    {
      title: "How do I track my order?",
      content:
        "Once your order has been shipped, you'll receive an email with tracking information.",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Yes, we offer worldwide shipping with additional charges depending on the location.",
    },
  ];

  return (
    <div className="flex items-center flex-col lg:flex-row justify-around py-10 lg:py-20">
      <div>
        <div>
          <img
            src={shape}
            alt=""
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
          />
          <p className="font-700 text-[28px] sm:text-[36px] lg:text-[48px] font-jakarta leading-[38px] sm:leading-[48px] lg:leading-[68px] text-[#010121] pt-5 pb-6 sm:pb-8 lg:pb-10">
            Subscribe to get <br /> information, latest news <br />
            and other offers
          </p>
        </div>
        <div className="pt-6 sm:pt-8 lg:pt-12">
          <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] lg:gap-[40px]">
            <div className="bg-[#FFFCDF] w-[213px] h-[142px] rounded-[6px] flex flex-col items-center justify-center">
              <h2 className="font-[700] text-[42px] font-jakarta leading-[42px] text-[#010121] m-0 p-0">
                6414{" "}
                <span className="font-[700] font-Kumbh text-[20px] leading-[34px] text-[#010121] p-0 m-0">
                  +
                </span>
              </h2>
              <p className="font-jakarta font-[500] text-[24px] leading-[34px]">
                Usual Users
              </p>
            </div>
            <p className="text-[#010121] font-400 text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[30px] lg:leading-[34px] font-jakarta ">
              There are many variations of <br />
              passages. The majority have <br />
              suffered alteration nsectetur <br />
              cing elit If you are going to
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 lg:pt-16">
        <div className="bg-[#F5EFEA] w-full max-w-lg h-auto rounded-[5px] p-6 lg:p-10 mx-auto">
          <h2 className="font-jakarta font-[700] text-[22px] lg:text-[28px] leading-[32px] lg:leading-[36px] text-[#010212]">
            Popular Questions
          </h2>

     {/* Accordion Items */}
{accordionData.map((item, index) => (
  <div key={index} className="py-4">
    <div className="border w-full border-gray-300 rounded-md">
      <button
        onClick={() => toggleAccordion(index)}
        className="flex justify-between items-center w-full h-[46px] p-4 bg-[#000000] text-white rounded-[5px] transition-all duration-200"
        style={{ height: '46px' }} // Fixed height for the button
      >
        <span className="font-[500] font-jakarta text-[16px] lg:text-[18px] leading-[32px] lg:leading-[36px]">
          {item.title}
        </span>
        <svg
          className={`transition-transform duration-200 ${
            openAccordion === index ? 'rotate-180' : ''
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1" />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="rotate-90 transform origin-center"
          />
        </svg>
      </button>

      {openAccordion === index && (
        <div
          className="p-4 bg-[#FDF4EE] w-full"
          style={{ height: '150px', overflow: 'hidden' }} // Fixed height for content
        >
          <p className="font-[400] font-jakarta text-[16px] lg:text-[18px] leading-[32px] lg:leading-[36px] text-[#010212]">
            {item.content}
          </p>
        </div>
      )}
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Faq;
