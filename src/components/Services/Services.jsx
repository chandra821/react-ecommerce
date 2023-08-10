// components/About.js

import React from "react";
import "./services.css"; // Import the CSS file for styling
import Layout from "../shared/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
          ante in orci ullamcorper, non venenatis lorem efficitur.
        </p>
        {/* Add more information about your organization, application, or website here */}
      </div>
    </Layout>
  );
};

export default Services;
