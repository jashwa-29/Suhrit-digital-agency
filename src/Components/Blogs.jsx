import React from 'react';
import blogData from '../Components/Data'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Blogs = () => {
  // Get the first 3 blog posts from the blogData
  const blogs = blogData.slice(0, 3); // Get the first 3 blogs

  return (
    <section>
      {/* Container */}
      <div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            The latest and greatest news
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          {/* Content */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={`/blog/${blog.id}`} // Link to the single blog page
                className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 hover:shadow-md transition ease-in-out overflow-hidden hover:scale-105 px-4 py-8 md:p-0"
              >
                <img
                  src={blog.image} // Use blog.image instead of blog.imgSrc
                  alt={blog.title}
                  className="h-60 object-cover" // Add border radius to the image
                />
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm font-semibold uppercase text-gray-500">
                    {blog.category}
                  </p>
                  <p className="mb-4 text-xl font-semibold">{blog.title}</p>
                  <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8 line-clamp-3">
                    {blog.content || 'A brief description of the blog content.'} {/* Optional description */}
                  </p>
                  <div className="flex">
                    <div className="flex flex-col">
                      <div className="flex flex-col lg:flex-row">
                        <p className="text-sm text-gray-500">{blog.date}</p>
                        <p className="mx-2 hidden text-sm text-gray-500 lg:flex">
                          -
                        </p>
                        <p className="text-sm text-gray-500">{blog.readTime || '5 min read'}</p> {/* Optional read time */}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* Button */}
          <Link to={'/blog'} // Link to the blog page
            className="rounded bg-[#343230] hover:bg-[#e3d2bc] px-6 py-3 text-center font-semibold text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
