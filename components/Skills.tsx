import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  const [dataSkill, setDataSkill] = useState([
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/919/919842.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png",
      percent: "60%",
    },
    {
      imglogo:
        "https://cdn-icons-png.flaticon.com/512/3665/3665923.png",
      percent: "50%",
    },
    {
      imglogo:
        "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      percent: "80%",
    },
    {
      imglogo: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png",
      percent: "50%",
    },
    {
      imglogo:
        "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
      percent: "60%",
    },
    {
      imglogo:
        "https://cdn-icons-png.flaticon.com/512/518/518713.png",
      percent: "60%",
    },
    {
      imglogo:
        "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      percent: "60%",
    },
    {
      imglogo:
        "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
      percent: "40%",
    },

    
  ]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex justify-center items-center relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        SKills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm px-8">
        Hand-on experience with
      </h3>

      <div className="grid grid-cols-4 md:gap-8 gap-4 absolute top-[30%] px-8 m-auto">
        {dataSkill.map((item, index) => (
          <Skill logoImg={item.imglogo} percent={item.percent} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
