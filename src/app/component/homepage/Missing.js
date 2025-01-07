import React from "react";

const Missing = () => {
  return (
    <div>
      <div className="  mt-10 scroll-mt-[90px] duration-300" id="server">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="border-2  shadow-md hover:shadow-2xl shadow-slate-200    hover:shadow-blue-400 bg-[#fff] rounded-lg p-6  hover:scale-10 transition duration-300">
            <h2 className=" text-2xl font-bold  ">Our Vision</h2>
            <p className=" mt-3 ">
              Data-driven excellence Revolutionizing industries through
              cutting-edge analytics.
            </p>
          </div>
          <div className="border-2  shadow-md hover:shadow-2xl shadow-slate-200    hover:shadow-blue-400 bg-[#fff] rounded-lg p-6  hover:scale-10 transition duration-300">
            <h2 className=" text-2xl font-bold  ">Our Mission</h2>
            <p className="mt-3">
              To bridge the gap between data and decision-making, fueling
              progress and transformation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missing;
