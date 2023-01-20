import React from "react";
import Avatar from "../assets/about_image.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <div className="hero-img -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px] hidden md:inline-flex">
        {}
        <Image
          src={Avatar}
          alt="img"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="space-y-10 px-0 md:px-10 tracking-[2px]">
        <h4 className="text-semibold text-4xl underline decoration-[#2cf9fa]/50 hidden md:inline-flex">
          Something About Me!!!
        </h4>
        <div className="text-sm text-gray-400">
          I am a mix of a lot of things. Even though my major focus on Software Engineering but I have luck to play various roles and participate in a lot of projects with different cultures, business models and sizes.
          <ul>
            <li>Deep passion in software engineering with 8 years experienced</li>
            <li>Quickly study new technology</li>
            <li>Excellent at problem-solving skill</li>
            <li>Excellent at teamwork skill</li>
          </ul>
        </div>
        <h4 className="text-lg">
          <span className="underline decoration-[#2cf9fa]/50">
            Goals
          </span>
          : Become a Guru in software engineering
        </h4>
      </div>
    </motion.div>
  );
};

export default About;
