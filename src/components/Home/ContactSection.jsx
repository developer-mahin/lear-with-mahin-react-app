import React from "react";
import { toast } from "react-hot-toast";
import contactLottie from "../../assets/lottie/contact-lottie.json";
import Lottie from "lottie-react";

const ContactSection = () => {
  const handleContact = (event) => {
    event.preventDefault();
    toast.success("Successfully submit");
  };
  return (
    <div className="lg:py-20 py-6 ">
      <div className="text-center">
        <div className="">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Contact Us
          </p>
        </div>
        <h2 className="text-3xl font-bold uppercase lg:pb-8 pb-3">
          Stay connected with us
        </h2>
      </div>
      <div className="">
        <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div>
            <Lottie animationData={contactLottie} loop={true} />
          </div>
          <form onSubmit={handleContact}>
            <input
              className="w-full  py-3 px-6 rounded-xl my-4 border-2"
              placeholder="Email Address"
              type="email"
              name="email"
              id=""
              required
            />
            <input
              className="w-full  py-3 px-6 rounded-xl my-4 border-2"
              placeholder="Subject"
              type="text"
              name="text"
              id=""
              required
            />
            <textarea
              className="w-full py-3 px-6 rounded-xl my-4 border-2"
              placeholder="Your message"
              name="message"
              id=""
              required
              cols="30"
              rows="3"
            ></textarea>
            <div className="text-center">
              <button className="px-8 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
