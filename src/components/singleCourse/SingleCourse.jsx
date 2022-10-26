import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from 'react-icons/fa';

const SingleCourse = ({ course }) => {
  const { picture, _id, description, title, price } = course;

  return (
    <div className="max-w-md border-2 p-2 rounded">
      <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
        <img src={picture} alt="" />
      </div>
      <h6 className="mb-4 text-2xl font-semibold leading-5">{title}</h6>
      <p className="text-gray-700">
        {description && (
          <>
            {" "}
            {description.slice(0, 90) + "..."}{" "}
            <Link
              to={`/courses/${course._id}`}
              className="text-blue-700 hover:underline"
            >
              Reade More
            </Link>{" "}
          </>
        )}{" "}
      </p>
      <div className="flex justify-between items-center mt-2 lg:mt-4">
        <div className="flex items-center">
        <FaStar className="text-warning"></FaStar>
        <FaStar className="text-warning"></FaStar>
        <FaStar className="text-warning"></FaStar>
        <FaStar className="text-warning"></FaStar>
        <FaStarHalf className="text-warning"></FaStarHalf>
        </div>
        <div>
          <h4 className="font-semibold">Price: ${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
