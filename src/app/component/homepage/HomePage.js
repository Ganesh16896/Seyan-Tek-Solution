import React from "react";
import Layout from "../common/Layout";
import Banner from "./Banner";
import Services from "./Services";
import OurClient from "./OurClient";
import OurServers from "./OurServers";
import Missing from "./Missing";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <div className="pt-[65px] w-full">
          <Banner />
          <div className="px-3 md:px-10">
            {/* <OurServers /> */}
            <Services />
            <Missing />
            <OurClient />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
