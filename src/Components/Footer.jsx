import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black py-11 lg:mt-36 mt-40 md:mt-72">
        <div className="bg-[#F2F2F7] w-9/12 mx-auto h-auto py-12 px-12 flex items-center flex-wrap lg:gap-0 gap-7 justify-between rounded-md mt-[-130px] mb-8">
        <div className="text-center md:text-start">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl"> Get the latest and greatest </h2>
        <p className="max-w-md text-sm sm:test-base text-gray-500"> Lorem ipsum dolor sit amet, consectetur. </p>
      </div>
      <div className="max-w-md sm:max-w-full">
        <form name="email-form" method="get" className="relative mx-auto mb-4 flex w-full flex-col items-center justify-center sm:flex-row">
          <input type="email" className="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black" placeholder="Enter your email" />
          <input type="submit" value="Notify me" className="relative right-0 w-full cursor-pointer rounded-md bg-black px-3 py-2 text-sm font-semibold text-white top-2 sm:top-auto sm:absolute sm:right-2 sm:w-24 lg:w-28 lg:text-base" />
        </form>
        <p className="text-sm text-gray-500 sm:text-base"> Join a community of over <span>5000+ Webflow Developers</span>
        </p>
      </div>
        </div>
        <div className="lg:w-11/12 w-full px-4 mx-auto sm:px-6 lg:px-7">
          <div className="flex flex-wrap lg:justify-between justify-center gap-10  ">
            <div className="flex  flex-col gap-5 text-white">
              <a href="">SUHRIT</a>
              <p className="w-80">
                Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet
                luctus
              </p>
              <div className="flex items-center gap-5">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-twitter"></i>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-20">
              <div className="flex flex-col  gap-4">
                <h3 className="text-white">SOLUTION</h3>
                <a href="" className="text-gray-500">
                  Marketing
                </a>
                <a href="" className="text-gray-500">
                  Analytics
                </a>
                <a href="" className="text-gray-500">
                  Commerce
                </a>
                <a href="" className="text-gray-500">
                  Insights
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-white">SUPPORT</h3>
                <a href="" className="text-gray-500">
                  Privay Policy
                </a>
                <a href="" className="text-gray-500">
                  Documentation
                </a>
                <a href="" className="text-gray-500">
                  Guides
                </a>
                <a href="" className="text-gray-500">
                  Payment
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-white">COMPANY</h3>
                <Link href="/about" className="text-gray-500">
                  About
                </Link>
                <Link href="/blog" className="text-gray-500">
                Blogs
                </Link>
                <Link href="/contact" className="text-gray-500">
                Contact
                </Link>
                <Link href="/career" className="text-gray-500">
                  Career
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 text-white ">
              <div className="flex  gap-3">
                <i class="bi bi-geo-alt-fill text-[20px] "></i>{" "}
                <p className="w-60">
                  8502 Preston Rd. Inglewood, Maine 98380, USA
                </p>
              </div>
              <div className="flex  gap-3">
                <i class="bi bi-envelope  text-[20px]"></i>{" "}
                <a href="">support@flowspark.co</a>
              </div>
            </div>
          </div>
          {/* DIVIDER */}{" "}
          <div className="mx-auto my-12 w-full border border-gray-300 lg:my-12"></div>{" "}
          {/* COPYRIGHT TEXT */}{" "}
          <div>
            <p className="font-inter text-center text-sm text-gray-500 lg:mt-0 mb-5">
              {" "}
              © Copyright 2021. All rights reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
