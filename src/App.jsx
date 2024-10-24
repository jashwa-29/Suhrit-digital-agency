import React, { useEffect, useState, Suspense, lazy, startTransition } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Blog = lazy(() => import('./Pages/Blog'));
const SingleBlog = lazy(() => import('./Pages/SingleBlog'));
const ServiceDetail = lazy(() => import('./Pages/ServiceDetail'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    startTransition(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
};

// Custom loader component
const CustomLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#343230]"></div>
  </div>
);

const App = () => {
  const [loader, setLoader] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Simulate a 4-second delay for initial loading (as per your original code)
    const timer = setTimeout(() => {
      setLoader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Delay showing the fallback loader to avoid a flash
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(true);
    }, 300); // 300ms delay before showing the loader

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      {loader ? (
        <CustomLoader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <ScrollToTop /> {/* Ensures the page starts from the top */}
          <Suspense fallback={showLoader ? <CustomLoader /> : null}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:id" element={<SingleBlog />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
