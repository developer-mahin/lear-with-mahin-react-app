import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const GetPremium = () => {
  const getPremium = useLoaderData();
  const { picture, title } = getPremium;
  console.log(getPremium);
  return (
    <section className="py-6">
      <div className="container mx-auto flex gap-3 flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
        <div className="flex flex-col flex-1 p-4 pb-8 sm:p-8 lg:p-4 border-2 rounded">
          <p className="lg:text-4xl text-2xl font-semibold lg:text-center mb-4 text-gray-600">{title}</p>
          <img src={picture} alt="" />
          <button className="border mt-5 bg-cyan-600 hover:bg-cyan-700 duration-200 py-2 text-black font-semibold w-1/2 rounded-3xl">
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-violet-400 text-gray-900">
          <span className="text-sm font-semibold">Advanced</span>
          <p className="text-5xl font-bold">89€</p>
          <p className="font-semibold">
            Nemo deserunt possimus quo provident recusandae! Dolores qui
            architecto omnis pariatur eos voluptatibus sequi cum, non nesciunt
            aspernatur a?
          </p>
          <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-800 text-gray-50">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetPremium;
