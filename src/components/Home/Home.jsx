import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";
import ContactSection from "./ContactSection";
import WhatYouLearn from "./WhatYouLearn";

const Home = () => {

  useTitle("Home")

  return (
    <>
      <Banner></Banner>
      <WhatYouLearn></WhatYouLearn>
      <ContactSection></ContactSection>
    </>
  );
};

export default Home;
