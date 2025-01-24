import React from 'react';

const features = [
  {
    title: "Refreshing Design",
    description: "We enjoy working with discerning clients, people for whom quality, service, integrity, and aesthetics matter.",
    iconPath: "M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374Z", // Example path
  },
  {
    title: "Based on Tailwind CSS",
    description: "We enjoy working with discerning clients, people for whom quality, service, integrity, and aesthetics matter.",
    iconPath: "M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625Z",
  },
  {
    title: "Feature Three",
    description: "We create solutions for clients who value quality and innovation in their projects.",
    iconPath: "M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126Z",
  },
];

const JobReady = () => {
  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
                Explore the wide range of services we provide, tailored to meet your specific needs.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={feature.iconPath} fill="white" />
                  </svg>
                </div>
                <h4 className="text-dark mb-[14px] text-2xl font-semibold">{feature.title}</h4>
                <p className="text-body-color dark:text-dark-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobReady;
