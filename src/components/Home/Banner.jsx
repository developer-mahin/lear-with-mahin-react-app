import React from "react";
import { Link } from "react-router-dom";
import bannerLottie from "../../assets/lottie/42367-joy-in-education.json"
import Lottie from "lottie-react"

const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-10 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">

      <Lottie animationData={bannerLottie} loop={true} />

      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block text-xl tracking-wider text-gray-400 uppercase rounded-full bg-teal-accent-400">
            We don't sell courses, We sell guidance
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none">
            Human to Human Resource
            <span className="inline-block text-deep-purple-accent-400"></span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            We provide a lot of free content throughout our whole ecosystem. But
            in this platform, we are listing tons of great lessons that can help
            you grow 5x faster with our guidance. You can learn specific
            technology with our world-class byte size courses which are called
            Chunk.
          </p>
          <div className="flex items-center">
            <Link
              to="/courses"
              className="inline-flex text-black items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Check Our Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
