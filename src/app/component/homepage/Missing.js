import React from "react";

const Missing = () => {
  return (
    <div>
      <div className="  mt-10 scroll-mt-[90px] duration-300" id="server">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="border-2   hover:shadow-slate-200 hover:shadow-xl border-gray-500 p-6 rounded-md shadow-sm hover:scale-10 shadow-gray-300 transition duration-300">
            <h2 className=" text-2xl font-bold  border-b-[3px] border-orange-600 w-[150px]">
              Our Vision
            </h2>
            <p className=" mt-3 ">
              Data-driven excellence Revolutionizing industries through
              cutting-edge analytics.
            </p>
          </div>
          <div className="border-2 hover:shadow-slate-200 hover:shadow-xl border-gray-500 p-6 rounded-md shadow-sm hover:scale-10 shadow-gray-300 transition duration-300">
            <h2 className=" text-2xl font-bold  border-b-[3px] border-orange-600 w-[170px]">
              Our Mission
            </h2>
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
