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
      count: "20+",
    },
    {
      id: 3,
      title: "Client",
      count: "10+",
    },
    {
      id: 4,
      title: "Countries",
      count: "8+",
    },
  ];
  return (
    <div className="  mt-10 scroll-mt-[90px] duration-300 " id="server">
      <h2 className=" text-2xl font-bold  border-b-[3px] border-orange-600 w-[160px]">
        Our Clients
      </h2>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {list.map((res) => (
            <>
              <div className="border-2  text-center hover:shadow-slate-200 hover:shadow-xl border-gray-500 p-6 rounded-md shadow-sm hover:scale-10 shadow-gray-300 transition duration-300">
                <h3 className="text-2xl font-bold">
                  {res.title} {""}
                </h3>
                <p className="text-4xl font-bold mt-3 text-[#38bdf8]">
                  {res.count}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
