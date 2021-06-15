import React from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import About from "./about_me/AboutMe"
import ContactMe from "./contact_me/ContactMe"
const HomePage = (_, context) => {
  return (
    <>
      <Header />
      <About />
      <ContactMe />
    </>
  );
};

HomePage.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default HomePage;
