import React from "react";

const WhatYouLearn = () => {
  const courseInfo = [
    {
      id: 1,
      img: "https://i.ibb.co/n0kBm73/java-Script.png",
      name: "JavaScript",
    },
    {
      id: 2,
      img: "https://i.ibb.co/8Xpm8Jc/React-icon-svg.png",
      name: "React",
    },
    {
      id: 3,
      img: "https://i.ibb.co/nLxFKCs/590px-Node-js-logo-svg.png",
      name: "Node.JS",
    },
    {
      id: 4,
      img: "https://i.ibb.co/0C5fH6d/download-2-removebg-preview.png",
      name: "Express.JS",
    },
    {
      id: 5,
      img: "https://i.ibb.co/KKb1cwh/images-removebg-preview.png",
      name: "C Programming",
    },
    { id: 6, img: "https://i.ibb.co/N6J5kjF/firebase.png", name: "Firebase" },
  ];

  return (
    <div className="lg:py-20 py-6 bg-cyan-100 bg-opacity-40 px-3">
      <div className="text-center">
        <div className="">
          <h2 className="text-3xl font-bold uppercase">
            What Will You Learn?_
          </h2>
        </div>
        <p className="text-lg">
          Every web course consist of 80+ modules, 25+ courses projects, 15+
          practice projects and 12 assignment
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 container mx-auto justify-center lg:mt-14 mt-6">
        {courseInfo.map((info) => (
          <div
            className="border rounded-xl shadow-lg p-6 hover:shadow-2xl"
            key={info.id}
          >
            <h2 className="text-center font-semibold text-xl py-2">{info.name}</h2>
            <img className="w-full h-auto flex justify-center items-center" src={info.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouLearn;
