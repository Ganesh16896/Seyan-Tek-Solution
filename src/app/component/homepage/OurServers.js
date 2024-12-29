"use client";
import React, { useEffect, useRef, useState } from "react";
import RevealOnScroll from "../common/RevealOnScroll";

const OurServers = () => {
  return (
    <div className="container mx-auto text-center">
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">
          Welcome to the computer science portal!
        </p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">Learn Web Development</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">Learn Android Development</p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">
          Learn Data Stuctures and Algorithms
        </p>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-3xl h-[15em] mt-[10em]">and more...</p>
      </RevealOnScroll>
    </div>
  );
};

export default OurServers;

// Filename - App.js
