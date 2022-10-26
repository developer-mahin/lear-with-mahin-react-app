import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const coursesId = useLoaderData();
  const ref = React.createRef();
  const { picture, title, description, _id } = coursesId;
console.log(coursesId);
  return (
    <div className="py-8 container mx-auto">
      <div className=" p-2 grid lg:grid-cols-4 gap-5">
        <div className="col-span-3 shadow-xl border">
          <div className=" mb-4 rounded-full bg-indigo-50">
            <img className="w-full" src={picture} alt="" />
          </div>
          <div className="p-4">
            <h6 className="mb-4 text-2xl font-semibold leading-5">{title}</h6>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
        <div className="shadow-xl rounded p-4 border">
          <iframe
            width=""
            height=""
            src="https://www.youtube.com/embed/w6_E2IgSza0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div>
            <Link
              to={`/getPremium/${_id}`}
              className="btn btn-outline btn-success my-1 w-full"
            >
              Get premium access
            </Link>
          </div>

          <div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
              {({ toPdf }) => (
                <button
                  className="btn btn-outline btn-success my-1 w-full"
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
