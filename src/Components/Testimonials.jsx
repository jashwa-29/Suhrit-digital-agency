import React, { useState } from 'react';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      id: 1,
      text: '“Working with this team was a fantastic experience. They understood our needs perfectly and delivered the project on time with exceptional quality.”',
      name: 'Laila Bahar',
      role: 'Designer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 2,
      text: '“A highly professional team that not only met our expectations but exceeded them. Their attention to detail and innovation is remarkable.”',
      name: 'John Doe',
      role: 'Developer',
      avatar: 'https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=220',
    },
    {
      id: 3,
      text: '“An excellent partnership with this company. They delivered high-quality results and maintained clear communication throughout the process.”',
      name: 'Jane Smith',
      role: 'Marketing',
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
      <div className="lg:w-11/12 w-full mx-auto lg:px-8 px-8">
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
