import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const coursesId = useLoaderData();
  const ref = React.createRef();
  const { picture, title, description } = coursesId;

  return (
    <div className="py-8">
      <div className="w-1/2 mx-auto border-2 p-2 rounded">
        <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
          <img src={picture} alt="" />
        </div>
        <h6 className="mb-4 text-2xl font-semibold leading-5">{title}</h6>
        <p className="text-gray-700">{description}</p>
        <Link className="btn btn-outline btn-success my-2">
          Get premium access
        </Link>
        <div>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button
                className="btn btn-outline btn-success my-2"
                onClick={toPdf}
              >
                Download PDF <FaDownload className="mx-1"></FaDownload>
              </button>
            )}
          </Pdf>

          <div className="" ref={ref}>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
