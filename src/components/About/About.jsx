// components/About.js

import React from "react";
import "./About.css"; // Import the CSS file for styling
import Layout from "../shared/Layout";

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          ante in orci ullamcorper, non venenatis lorem efficitur.
        </p>
        {/* Add more information about your organization, application, or website here */}
      </div>
    </Layout>
  );
};

export default About;
