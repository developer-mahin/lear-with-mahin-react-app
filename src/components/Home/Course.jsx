import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://learn-with-mahin-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container mx-auto px-3 lg:py-20 py-5">
      <div>
        <h2 className="text-4xl font-semibold">
          Learn in-demand professional skills
        </h2>
        <span className="text-lg font-medium">
          {" "}
          Choose from courses in English and many other languages
        </span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Course;
