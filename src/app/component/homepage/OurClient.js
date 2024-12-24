import React from "react";

const OurClient = () => {
  return (
    <div className=" text-center px-3 md:px-10 mt-10">
      <div className="text-center text-2xl font-bold">
        <h2>IN Number</h2>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-2 xs:grid-cols-2 xl:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold">Emplayees</h3>
            <p className="text-4xl font-bold mt-3 text-[#38bdf8]">40+</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Project</h3>
            <p className="text-4xl font-bold mt-3 text-[#38bdf8]">20+</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Client</p>
            <p className="text-4xl font-bold mt-3 text-[#38bdf8]">10+</p>
          </div>

          <div>
            <p className="text-2xl font-bold">Countries</p>
            <p className="text-4xl font-bold mt-3 text-[#38bdf8]">8+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
