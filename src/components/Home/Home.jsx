import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";
import ContactSection from "./ContactSection";
import Course from "./Course";
import Creative from "./Creative";
import WhatYouLearn from "./WhatYouLearn";

const Home = () => {

  useTitle("Home")

  return (
    <>
      <Banner></Banner>
      <Creative></Creative>
      <Course></Course>
      <WhatYouLearn></WhatYouLearn>
      <ContactSection></ContactSection>
    </>
  );
};

export default Home;
