import React from "react";
import Layout from "../common/Layout";
import Banner from "./Banner";
import Services from "./Services";
import OurClient from "./OurClient";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div className="pt-[64px] w-full">
          <Banner />
          <div className="px-3 md:px-10">
            <Services />

            <OurClient />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
