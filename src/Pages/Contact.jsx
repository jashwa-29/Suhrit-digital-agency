import React, { useState } from "react";
import contnum from "../assets/contactnum.png";
import contadd from "../assets/addresscontact.png";
import contabt from "../assets/addresscontact.png";
import PageIndicator from "../Components/PageIndicator";

const Contact = () => {
  const [error, setError] = useState({});
  const [formData, setformdata] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newError = {};

    // Name validation
    if (!formData.name) newError.name = "Name is required";

    // Email validation (regex for a valid email pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newError.email = "Invalid email format";
    }

    // Phone number validation (must be 10 digits and numeric)
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.number) {
      newError.number = "Phone number is required";
    } else if (!phonePattern.test(formData.number)) {
      newError.number = "Phone number must be 10 digits";
    }

    // Subject validation
    if (!formData.subject) newError.subject = "Subject is required";

    // Message validation
    if (!formData.message) newError.message = "Message is required";

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = validateForm();
    if (Object.keys(validate).length > 0) {
      setError(validate); // Set errors if validation fails
    } else {
      setError({}); // Clear errors if the form is valid
      console.log("Submitted Data:", formData);
      setformdata({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      <PageIndicator text={"Contact Us"} />
      <section className="mx-auto w-full max-w-7xl px-4  md:px-10">
        {" "}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[40px] py-12 md:py-24">
          {" "}
          <div className="bg-[#F6F4F9] w-full md:w-[370px] h-auto md:h-[403px] flex justify-center items-center flex-col rounded-[8px] p-6">
            {" "}
            <img src={contabt} alt="" className="w-[142px] h-[142px]" />{" "}
            <h2 className="font-Barlow font-[500] text-[24px] md:text-[30px] leading-[30px] md:leading-[40px] py-3 md:py-5">
              {" "}
              ABOUT{" "}
            </h2>{" "}
            <p className="w-full md:w-[223.65px] h-auto font-san font-[400] text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-[#726D7B] text-center">
              {" "}
              Lorem ipsum is simply free text dolor sit amet, conse ullam
              blandit.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-[#F6F4F9] w-full md:w-[370px] h-auto md:h-[403px] flex justify-center items-center flex-col rounded-[8px] p-6">
            {" "}
            <img src={contadd} alt="" className="w-[142px] h-[142px]" />{" "}
            <h2 className="font-Barlow font-[500] text-[24px] md:text-[30px] leading-[30px] md:leading-[40px] py-3 md:py-5">
              {" "}
              ADDRESS{" "}
            </h2>{" "}
            <p className="w-full md:w-[223.65px] h-auto font-san font-[400] text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-[#726D7B] text-center">
              {" "}
              60 Brooklyn Golden Street, New York. United States of America.{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-[#F6F4F9] w-full md:w-[370px] h-auto md:h-[403px] flex justify-center items-center flex-col rounded-[8px] p-6">
            {" "}
            <img src={contnum} alt="" className="w-[142px] h-[142px]" />{" "}
            <h2 className="font-Barlow font-[500] text-[24px] md:text-[30px] leading-[30px] md:leading-[40px] py-3 md:py-5">
              {" "}
              CONTACT{" "}
            </h2>{" "}
            <p className="w-full md:w-[223.65px] h-auto font-san font-[400] text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-[#726D7B] text-center">
              {" "}
              needhelp@company.com <br /> +1 123 456 7890{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      <section className="mx-auto w-full max-w-7xl  py-16 md:px-10 md:py-10">
        <div>
          <div className="text-center">
            <h2 className="uppercase text-[#726D7B] font-Barlow font-[500] text-[14px] leading-[24px] tracking-[1.4px] underline">
              contact with us
            </h2>
            <h2 className="text-[#04000B] font-[500] font-Barlow text-[32px] md:text-[50px] leading-[40px] md:leading-[60px]">
              GET IN TOUCH
            </h2>
          </div>

          <div className="flex justify-center items-center pt-6 md:pt-10">
            <div className="w-full h-auto flex flex-col justify-center items-center">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-[40px]">
                  <div className="w-full">
                    <input
                      type="text"
                      className="bg-[#F6F4F9] lg:w-[438px] w-full h-[68px] rounded-[8px] placeholder:font-sans placeholder:text-[#726D7B] font-sans text-[16px] font-[400] leading-[20.83px] pl-6 outline-none border-none"
                      placeholder="Your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {error.name && (
                      <p className="text-[16px] text-red-500 font-sans">
                        {error.name}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      className="bg-[#F6F4F9] lg:w-[438px] w-full h-[68px] rounded-[8px] placeholder:font-sans placeholder:text-[#726D7B] font-sans text-[16px] font-[400] leading-[20.83px] pl-6 outline-none border-none"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {error.email && (
                      <p className="text-[16px] text-red-500 font-sans">
                        {error.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-[40px] py-8">
                  <div className="w-full">
                    <input
                      type="text"
                      maxLength={10}
                      className="bg-[#F6F4F9] lg:w-[438px] w-full h-[68px] rounded-[8px] placeholder:text-[#726D7B] font-sans text-[16px] font-[400] leading-[20.83px] pl-6 outline-none border-none"
                      placeholder="Phone Number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                    {error.number && (
                      <p className="text-[16px] text-red-500 font-sans">
                        {error.number}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className="bg-[#F6F4F9] lg:w-[438px] w-full h-[68px] rounded-[8px] placeholder:text-[#726D7B] font-sans text-[16px] font-[400] leading-[20.83px] pl-6 outline-none border-none"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {error.subject && (
                      <p className="text-[16px] text-red-500 font-sans">
                        {error.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    className="bg-[#F6F4F9] rounded-[8px] w-full h-[175px] outline-none border-none pl-6 pt-3 font-sans text-[16px] font-[400]"
                    placeholder="Your Message"
                  ></textarea>
                  {error.message && (
                    <p className="text-[16px] text-red-500 font-sans">
                      {error.message}
                    </p>
                  )}
                </div>
                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full md:w-[252px] h-[62px] bg-[#343230] rounded-[8px] font-sans text-white font-[700] text-[16px] leading-[22px]"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <iframe
          className="w-full h-[400px] rounded-[8px] shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.5506767953074!2d-77.03687068424096!3d38.89795727957038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7b162d624a3%3A0xa0c686e5f8333980!2sWhite%20House!5e0!3m2!1sen!2sus!4v1630317496524!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
