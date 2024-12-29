"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const Services = () => {
  const Services = [
    {
      id: 1,
      title: "Traffic Flow Analysis",
      discription:
        "Our expert team can analyze any junction layout, from basic T-junctions to complex multi-camera roundabouts, supporting all vehicle classifications. We specialize in accurate, lane-by-lane vehicle tracking, with particular expertise in large roundabouts.",
    },
    {
      id: 2,
      title: "Queue Length Assessment",
      discription:
        "We provide tailored queue data based on client specifications, including maximum and minimum queue lengths for any given interval, average queue length, queue at the start of the green phase, and queue delay surveys.",
    },
    {
      id: 3,
      title: "Link and Mid-Block Traffic Analysis",
      discription:
        "Understanding traffic volume and the composition of different vehicle classes on any roadway is crucial for effective strategic planning, improvements, and maintenance. It also helps determine the Average Daily Traffic (ADT), Peak Hour Traffic, and their respective compositions",
    },
    {
      id: 4,
      title: "Non-Motorized Traffic Studies",
      discription:
        "We provide a wide range of Non-Motorized User (NMU) classifications, including pedestrians, cyclists, equestrians, and more. Our services cover NMU counts at signalized crossings, junction arms, traffic islands, and tracking movements between origin-destination points. ",
    },
    {
      id: 5,
      title: "Traffic Safety and Conflict Analysis",
      discription:
        "This is a specialized study we conduct for select clients, where we monitor and report conflicts between vehicles, pedestrians, cyclists, equestrians, and other road users. Typically, this study is carried out in high-traffic, tourist-heavy areas.",
    },
    {
      id: 6,
      title: "Origin-Destination Mapping",
      discription:
        "Using video footage, we can manually extract number plates to create a raw data set, which can then be used to generate an Origin-Destination Matrix tailored to the client’s specific requirements.",
    },

    {
      id: 7,
      title: "Travel Time Evaluation",
      discription:
        "Using video footage, we can manually extract number plates to create a raw data set, which can then be used to generate Travel Time for an Origin-Destination to the client’s specific requirements.",
    },
    {
      id: 8,
      title: "Monitoring Unauthorized Movements",
      discription:
        "We track and report illegal activities on specific roads using CCTV footage. These actions are monitored over extended periods to assess the volume of illegal traffic.",
    },
    {
      id: 9,
      title: "Level Crossing Surveillance",
      discription:
        "We specialize in monitoring Railway Level Crossings, tracking key events such as barrier down and up times, train arrivals and directions, pedestrian crossings, vehicle movements, traffic turning near the crossing, and any blocking-back traffic.",
    },
  ];
  useEffect(() => {
    // Get the hash value from the URL
    const hash = window.location.hash.slice(1); // Remove the '#' symbol
    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="pt-[65px] w-full">
      <div className="py-5 scroll-mt-[70px] duration-300" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div>
            <h2 className="text-2xl font-bold  border-b-[3px] border-orange-600 w-[150px]">
              About Us
            </h2>
            <p className="mt-3">
              At Seyantek solutions, we provide global traffic survey services,
              offering precise, lane-by-lane tracking and vehicle classification
              for all types of junctions and intersections. Our expertise and
              advanced technology deliver accurate data for traffic flow
              analysis, infrastructure planning, and congestion management. We
              help clients worldwide make informed, data-driven decisions to
              optimize transportation systems.
            </p>
          </div>
          <div className="relative w-full h-[250px] sm:h-[250px]">
            <Image
              src="/image/homeimg/abouttraff.png"
              fill
              className="object-cover w-full rounded-md"
              alt="banner"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold  border-b-[3px] border-orange-600 w-[180px]">
          Our Services
        </h2>
        <p className="mt-3">
          Understanding traffic patterns is essential for better planning,
          improved safety, and efficient infrastructure management. As the
          transport industry evolves, traffic congestion continues to grow in
          multiple ways. We offer a range of traffic survey services designed to
          meet the increasing demand and support efficient traffic management.
          Our service provides precise insights into vehicle volumes, traffic
          congestion, and peak-hour trends, as well as comprehensive, reliable,
          and real-time data to help you make informed decisions.
        </p>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Services.map((res, id) => (
            <div
              key={res.id}
              className="border-2  duration-300 p-4 sm:p-6  shadow-md hover:shadow-2xl shadow-slate-200    hover:shadow-gray-100 bg-[#111827] rounded-lg"
            >
              <h3 className="text-xl font-bold ">{res.title}</h3>
              <p className="pt-3 opacity-25 hover:opacity-100">
                {res.discription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
