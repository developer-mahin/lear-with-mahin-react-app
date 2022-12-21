import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import SingleCourse from "../singleCourse/SingleCourse";

const Course = () => {
  const courses = useLoaderData();

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="lg:max-w-xs w-full pr-16 mx-auto mb-10 border-2 rounded p-3">
          {courses.map((course) => (
            <div key={course._id}>
              <p className="text-blue-700 hover:underline my-2 font-semibold">
                <Link to={`/courses/${course._id}`}>{course.title}</Link>
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <SingleCourse key={course._id} course={course}></SingleCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
