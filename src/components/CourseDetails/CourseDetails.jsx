import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import {
  FaDownload,
  FaUserTie,
  FaUserGraduate,
  FaVideo,
  FaClock,
} from "react-icons/fa";

const CourseDetails = () => {
  const coursesId = useLoaderData();
  const ref = React.createRef();
  const {
    picture,
    title,
    description,
    _id,
    enroll,
    instructor,
    instructor_post,
    video,
    videos_duration,
  } = coursesId;

  return (
    <div className="py-8 container mx-auto">
      <div className=" p-2 grid lg:grid-cols-4 gap-5">
        <div className="col-span-3 shadow-xl border w-full">
          <div className=" mb-4 rounded-full bg-indigo-50">
            <img className="w-full" src={picture} alt="" />
          </div>
          <div className="p-4">
            <h6 className="mb-4 text-2xl font-semibold leading-5">{title}</h6>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
        <div className="lg:shadow-xl  lg:w-full rounded lg:p-4 p-2 lg:border flex items-start justify-center">
          <div>
            <iframe
              className="lg:w-full rounded shadow-lg"
              src="https://www.youtube.com/embed/w6_E2IgSza0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="mt-3">
              <div className="flex justify-start items-center gap-2  lg:my-5 my-2 ">
                <div className="border-teal-800 border-2 p-2 rounded-full">
                  <FaUserTie className="text-xl"></FaUserTie>
                </div>
                <div className="">
                  <p className="font-medium">Instructor: {instructor}</p>
                  <p>{instructor_post}</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 lg:my-5 my-2 ">
                <div className="border-teal-800 border-2 p-2 rounded-full">
                  <FaUserGraduate className="text-xl"></FaUserGraduate>
                </div>
                <div className="">
                  <p className="font-medium">Enroll: {enroll} students</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 lg:my-5 my-2 ">
                <div className="border-teal-800 border-2 p-2 rounded-full">
                  <FaVideo className="text-xl"></FaVideo>
                </div>
                <div className="">
                  <p className="font-medium">Videos: {video}</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2  lg:my-5 my-2 ">
                <div className="border-teal-800 border-2 p-2 rounded-full">
                  <FaClock className="text-xl"></FaClock>
                </div>
                <div className="">
                  <p className="font-medium">Video Duration: {videos_duration}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-3">
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
                  <div>
                    <h3 className="invisible">{title} Hello</h3>
                    <img className="invisible" src={picture} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
