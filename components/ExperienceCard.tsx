import React from "react";
import { motion } from "framer-motion";
import LogoVeriserve from "../assets/veriservevn.jpg";
import Avatar from "../assets/about_image.jpg";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col my-10 pb-4 lg:pb-10 rounded-lg items-center flex-shrink-0 w-[350px] md:w-[600px] xl:w-[1000px] bg-[#292929] snap-center hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden xl:mt-[100px]">
      <div className="px-4 md:px-10 w-[90%] lg:w-[85%] ">
        <h4 className="text-xl lg:text-2xl font-semibold">
        VeriServe Co., Ltd (7/2022 – now )
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
                <h3>HTML</h3>
                <h3>Javascript</h3>
                <h3>CSS</h3>
                <h3>Ruby (RoR)</h3>
                <h3>Redis</h3>
                <h3>Bootstrap</h3>
                <h3>Docker</h3>
                <h3>PostgreSQL</h3>
                <h3>Python</h3>
                <h3>Django</h3>
                <h3>HRBrain’s API</h3>
                <h3>CI/CD</h3>
                <h3>UnitTest</h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-3 lg:mt-0 lg:border-l lg:border-gray-700 lg:pl-12">
            <h1 className="text-lg border-b border-[#2cf9fa] inline-block ">
              Responsibility:
            </h1>
            <ul className="list-disc space-y-2 ml-5 text-sm mt-4 ">
            <li>Developing frontend and backend functions</li>
              <li>Build CI/CD pipeline with Github Action, automatically checking coding convention</li>
              <li>Designing solution architecture (screen flow, select frameworks, techstack) and developing code base</li>
              <li>Implementing features: Authentication and authorization, User rights permission, CV template management </li>
              <li>Writing Unit Test and Monitoring Code Coverage (C0,C1) using pytest, unittest, coverage library </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
