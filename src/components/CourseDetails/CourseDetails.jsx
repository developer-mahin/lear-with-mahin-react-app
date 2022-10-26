import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const coursesId = useLoaderData();
  const ref = React.createRef();
  const { picture, title, description, _id } = coursesId;

  return (
    <div className="py-8">
      <div className="lg:w-1/2 mx-auto border-2 p-2 rounded">
        <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
          <img src={picture} alt="" />
        </div>
        <h6 className="mb-4 text-2xl font-semibold leading-5">{title}</h6>
        <p className="text-gray-700">{description}</p>
        <div className="flex justify-between items-center mt-1 lg:mt-5">
          <div>
            <Link
              to={`/getPremium/${_id}`}
              className="btn btn-outline btn-success my-2"
            >
              Get premium access
            </Link>
          </div>

          <div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
              {({ toPdf }) => (
                <button
                  className="btn btn-outline btn-success my-2"
                  onClick={toPdf}
                >
                  Generate pdf <FaDownload></FaDownload>
                </button>
              )}
            </ReactToPdf>
            <div ref={ref}>
              <img className="invisible" src="" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
