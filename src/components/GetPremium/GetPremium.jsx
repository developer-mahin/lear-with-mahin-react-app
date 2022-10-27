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
          <p className="lg:text-4xl text-2xl font-semibold lg:text-center mb-4 text-gray-600">
            {title}
          </p>
          <img src={picture} alt="" />
          <button className="border mt-5 bg-cyan-600 hover:bg-cyan-700 duration-200 py-2 text-black font-semibold w-1/2 rounded-3xl">
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 pb-8  rounded-md text-gray-900">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border rounded-lg cursor-pointer">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-medium">
                  Who is this course for?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Who wants to become a web developer. Those who start from zero
                  and end Up to learning web development and then becoming a web
                  developer For those who want to work in software companies.
                  who Don't know much about programming or web development, for
                  them Even those who study four years of CSE how can they do
                  Couldn't do it, didn't learn much from this course Learn
                  complete web development and apply for jobs. 😀
                </p>
              </details>

              <details className="w-full border rounded-lg cursor-pointer">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-medium">
                  What prior experience do I need to have before starting this
                  course?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Since we are teaching from scratch. So you don't need to know
                  anything beforehand. But if you have time, you can do these
                  three things.
                </p>
              </details>

              <details className="w-full border rounded-lg cursor-pointer">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-medium">
                  What is in the course?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  You can understand that by looking at the course curriculum.
                  But in short, this course has everything you need to become a
                  serious web developer these days. In short, from HTML, CSS to
                  bootstrap, JavaScript, Git, ES6, REST API, server, JSON are
                  there. At the same time, there is a system for making complete
                  websites with React, the framework that currently has the most
                  jobs. In addition, there are many other things including node,
                  database (mongodb), debug, problem solving, interview
                  questions. And in the whole course you will be shown 11
                  websites.
                </p>
              </details>

              <details className="w-full border rounded-lg cursor-pointer">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-medium">
                  How to get the course videos?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Course videos will be pre-recorded. You open an account and
                  enroll in this course. Videos will be given one module per day
                  from the start of the course. Each module usually has 10 to 12
                  videos. You have to finish watching these videos within the
                  day they are released. Therefore, dedicated time should be
                  kept daily for the course. And during that time, you can watch
                  the video lying down, standing, leaning, swinging your legs,
                  dancing, or even hiding under the bed.
                </p>
              </details>

              <details className="w-full border rounded-lg cursor-pointer">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-medium">
                  What things do I need?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  First, it takes dedicated time. Mast 6-8 hours per day. 8-10
                  hours if possible (If you can't give time. If you don't want
                  to do hard work, there will be no benefit in enrolling in the
                  course.) Secondly you will need a laptop or a computer (where
                  software like node, Visual Studio Code can be installed) and
                  thirdly you will need minimum 2 - 10 Mbps internet. Broadband
                  is preferred so that the course videos can be viewed well. To
                  become a professional web developer, minimum 4 months of
                  serious hard work should be kept in mind.
                </p>
              </details>

              <details className="w-full border rounded-lg cursor-pointer">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-medium">
                  How to get a job after completing the course?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Notice one thing. But we do not guarantee the job. We say if
                  you finish the main course well on time you will go to SCIC.
                  Job, interview related special training will be given. Work
                  hard there and our four job placement team members will
                  forward your CV/resume to various companies. Whether that
                  company calls you for an interview or not is their decision.
                  It is also their decision whether to give you a job or not if
                  you are called for an interview.
                </p>
              </details>

              <details className="w-full border rounded-lg cursor-pointer">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-medium">
                  Apart from these I have one more question. Where should I ask?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  No tension. Feel free to send any questions you have to {" "}
                  <a
                    className="text-blue-600"
                    href="mailto:-mdmahin1310@gmail.com"
                  >
                     mdmahin1310@gmail.com
                  </a>{" "}
                  We will reply as soon as possible.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPremium;
