import { Link } from 'react-router-dom';
import PageIndicator from '../Components/PageIndicator';
import Faq from '../Components/Faq';
import blogData from '../Components/Data';

const Blog = () => {
  return (
    <>
      <PageIndicator text={'Our Blogs'} />
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
            The latest and greatest news
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
            Explore the most recent updates from our team.
          </p>
          <div className="grid justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 lg:gap-6">
            {blogData.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id} // Use blog.id as key
                className="flex flex-col gap-4 hover:shadow-md rounded-md px-4 py-8 md:p-0"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="inline-block h-60 w-full object-cover"
                />
                <div className="flex flex-col items-start px-3 py-4 overflow-hidden">
                  <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                    <p className="text-sm font-semibold text-blue-600">
                      {blog.category}
                    </p>
                  </div>
                  <p className="mb-4 text-xl font-bold md:text-2xl">
                    {blog.title}
                  </p>
                  <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                    <p>{blog.author}</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>{blog.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Blog;
