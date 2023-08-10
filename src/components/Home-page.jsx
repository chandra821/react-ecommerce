import React from "react";
import Layout from "./shared/Layout";
import Hero from "./hero/Hero";
import MainSection from "./main-section/Main-section";
import FeaturedCollection from "./featured-collection/Featured-collection";

const HomePage = () => {
    return (
        <>
        <Layout>
            <Hero/>
            <MainSection/>
            <FeaturedCollection/>
        </Layout>
        </>
    );
}
 export default HomePage;