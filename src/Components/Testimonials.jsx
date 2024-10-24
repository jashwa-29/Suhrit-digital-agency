import React, { useState } from 'react';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  // Array of reviews
  const reviews = [
    {
      id: 1,
      text: '“Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis...”',
      name: 'Laila Bahar',
      role: 'Designer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 2,
      text: '“Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis...”',
      name: 'John Doe',
      role: 'Developer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 3,
      text: '“Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus venenatis...”',
      name: 'Jane Smith',
      role: 'Marketing',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 4,
      text: '“A wonderful experience from start to finish. The team was professional and exceeded expectations...”',
      name: 'Alice Green',
      role: 'Product Manager',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 5,
      text: '“Highly recommend! They truly understand the customer’s needs and deliver exceptional quality...”',
      name: 'Mark Richards',
      role: 'Business Analyst',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 6,
      text: '“Their attention to detail and dedication to client satisfaction is impressive. Will work with them again...”',
      name: 'Susan Park',
      role: 'Project Coordinator',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 7,
      text: '“Great results, timely delivery, and excellent communication throughout the project...”',
      name: 'Michael Brown',
      role: 'Software Engineer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 8,
      text: '“Outstanding customer service and top-notch expertise. We couldn’t be happier with the final product...”',
      name: 'Emma White',
      role: 'HR Manager',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 9,
      text: '“They provided innovative solutions that enhanced our product and saved us time and money...”',
      name: 'James Miller',
      role: 'Operations Manager',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 10,
      text: '“Exceptional quality and a team that is dedicated to excellence. We will definitely collaborate again...”',
      name: 'Jessica Turner',
      role: 'Marketing Executive',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
  ];

  // Limit how many reviews are initially shown
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="block">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading */}
        <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          What our clients are saying
        </h2>

        {/* Reviews */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mb-8">
          {visibleReviews.map((review) => (
            <div key={review.id} className="grid grid-cols-1 gap-6 rounded-md border border-solid border-gray-300 bg-white p-8 md:p-10">
              <div className="flex">
                {/* Star icons */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947e84e6cf91_Vector.svg"
                    alt="star"
                    className="mr-1 inline-block w-3.5 flex-none"
                  />
                ))}
              </div>
              <div className="text-gray-500">
                {review.text}
              </div>
              <div className="flex flex-row items-start">
                <img
                  src={review.avatar}
                  alt="avatar"
                  className="mr-4 inline-block h-16 w-16 object-cover rounded-full"
                />
                <div className="flex flex-col items-start">
                  <h6 className="text-base font-bold">{review.name}</h6>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more reviews button */}
        <div className="flex flex-col">
          <button onClick={handleShowAll} className="mx-auto font-bold text-black">
            {showAll ? 'Show less reviews' : 'Show all reviews'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
