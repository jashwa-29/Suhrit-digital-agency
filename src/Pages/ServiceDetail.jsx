import React from 'react';
import { useParams } from 'react-router-dom';
import servicesdetails from '../Components/servicedata';
import PageIndicator from '../Components/PageIndicator';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  console.log('Service ID:', serviceId);
  const service = servicesdetails.find((s) => s.id.toString() === serviceId);
  console.log('Found Service:', service); 

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (

    <>
       <PageIndicator text={service.title} />
  
    
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
       
            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8">
            {service.title}
            </h1>
            <p className="text-sm text-gray-500 sm:text-xl">
            {service.description}
            </p>
            {/* Divider */}
            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
            <div></div>
            <div className='flex'>
              <p className='text-sm text-gray-500 sm:text-xl'> {service.overview}</p>
            <ul className="mb-6 flex flex-col gap-2 text-sm text-gray-500 sm:text-base lg:mb-8 w-auto p-6">
              <h3 className='text-sm text-black font-medium mb-3 sm:text-xl'>Features offered in our service</h3>
               {
                service.pageContent.features.map((features, index) => 
                     <li className='list-disc'>{features}</li>
              )
               }
            </ul>
            <ul className="mb-6 flex flex-col gap-2 text-sm text-gray-500 sm:text-base lg:mb-8 w-auto p-6">
              <h3 className='text-sm text-black font-medium mb-3 sm:text-xl'>Benifits of our service</h3>
               {
                service.pageContent.benefits.map((benefits, index) => 
                     <li className='list-disc'>{benefits}</li>
              )
               }
            </ul>
            </div>
         
            <div className="flex flex-col gap-4 font-semibold sm:flex-row">
              <Link to={'/contact'}

              >
              
              <button                className="w-[150px] md:w-[194px] h-[50px] md:h-[60px] rounded gap-10 border-2 border-black text-[16px] md:text-[18px] leading-[18px] font-[700] hover:bg-[#e3d2bc] hover:border-[#e3d2bc] hover:text-black ease-in-out">Contact US</button>
              </Link>
          
            </div>
          </div>
          {/* Image */}
          <div className="min-h-[530px] max-h-[700px] overflow-hidden rounded-md bg-gray-100">
            <img src={service.image} className='h-full w-full' alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServiceDetail;
