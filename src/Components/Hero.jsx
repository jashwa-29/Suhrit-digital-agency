import React from 'react'

const Hero = () => {
    return (

        <main>
        <section className="relative bg-hero-pattern bg-no-repeat bg-center w-[100%] h-[100vh] bg-cover flex items-center justify-center">
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-10 md:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Title */}
                    <h1 className="text-4xl text-white leading-[81px] font-semibold md:text-6xl">
                        Empowering Brands with Digital Excellence & Tech Innovation
                    </h1>
                    <p className="text-[15px] text-gray-300 font-light my-7">
                        At Suhrit, we are committed to helping businesses thrive in the digital age by offering comprehensive marketing solutions, from SEO and social media to content creation and tech consulting, ensuring you stay ahead in an ever-evolving landscape.
                    </p>
                    {/* Button */}
                    <a
                        href="#services" // Use an anchor for better navigation
                        className="inline-block items-center rounded-[50px] bg-transparent border-[2px] border-white px-8 py-4 text-center font-semibold text-white hover:bg-[#e3d2bc] hover:border-[#e3d2bc] hover:text-black transition ease-in-out"
                    >
                        Explore Our Services
                    </a>
                </div>
            </div>
        </section>
    </main>

    )
}

export default Hero
