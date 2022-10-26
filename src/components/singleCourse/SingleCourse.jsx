import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { picture, _id, description, title } = course;

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
    </div>
  );
};

export default SingleCourse;
