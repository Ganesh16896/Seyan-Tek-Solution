import React from "react";

const OurClient = () => {
  const list = [
    {
      id: 1,
      title: "Employees",
      count: "12+",
    },
    {
      id: 2,
      title: "Project",
      count: "60+",
    },
    {
      id: 3,
      title: "Client",
      count: "8+",
    },
    {
      id: 4,
      title: "Countries",
      count: "6+",
    },
  ];
  return (
    <div className="  mt-10 scroll-mt-[90px] duration-300 " id="server">
      <h2 className=" text-2xl font-bold  ">Our Clients</h2>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {list.map((res, id) => (
            <div key={id}>
              <div className=" text-center border-2  duration-300 p-4 sm:p-6  shadow-md hover:shadow-2xl shadow-slate-200    hover:shadow-blue-400 bg-[#fff] rounded-lg">
                <h3 className="text-2xl font-bold">
                  {res.title} {""}
                </h3>
                <p className="text-5xl font-bold mt-3 text-red-500">
                  {res.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
