import React from "react";
import { motion } from "framer-motion";
import LogoVeriserve from "../assets/veriservevn.jpg";
import Avatar from "../assets/about_image.jpg";

const ExperienceCard_IBridge = () => {
  return (
    <article className="flex flex-col my-10 pb-4 lg:pb-10 rounded-lg items-center flex-shrink-0 w-[350px] md:w-[600px] xl:w-[1000px] bg-[#292929] snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden xl:mt-[100px]">
      <div className="px-4 md:px-10 w-[90%] lg:w-[85%] ">
        <h4 className="text-xl lg:text-2xl font-semibold">
        i-BRIDGE Japan Co., Ltd (9/2019 – 1/2022)
        </h4>
        <p className="font-semibold text-md text-gray-400">
        Senior Software Engineer 
        </p>
        <div className="grid lg:grid-cols-3 lg:gap-10 mt-4">
          <div className="flex flex-col col-span-1">
            <div className="">
              <div>
                <h2 className="border-b border-[#2cf9fa] text-lg inline-block">
                  Technology:
                </h2>
              </div>
              <div className="text-sm text-gray-400 mt-2 lg:mt-4 gap-x-10 lg:gap-x-0 gap-y-1 lg:gap-y-0 grid grid-cols-2 w-full  lg:grid-cols-2">
                <h3>C/C++</h3>
                <h3>Python</h3>
                <h3>Linux</h3>
                <h3>Virtual Machine</h3>
                <h3>Shell Script</h3>
                <h3>Klocwork API</h3>
                <h3>Avahi</h3>
                <h3>PostgreSQL</h3>
                <h3>Airprint</h3>
                <h3>Window Server</h3>
                <h3>UnitTest</h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-3 lg:mt-0 lg:border-l lg:border-gray-700 lg:pl-12">
            <h1 className="text-lg border-b border-[#2cf9fa] inline-block ">
              Responsibility:
            </h1>
            <ul className="list-disc space-y-2 ml-5 text-sm mt-4 ">
              <li>Developing Linux application for Printer</li>
              <li>Investigating the solution to printing over the Internet (Avahi, Airprint) without installing Printer driver </li>
              <li>Writing system specifications, design documents.</li>
              <li>Investigating the solution to improve code quality and developing Klocwork custom checker integrated into Klocwork then deploying to Klocwork Server (Window Server)</li>
              <li>Investigating to improve code quality in multithread issues </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard_IBridge;
