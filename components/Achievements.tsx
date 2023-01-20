import React from "react";
import { motion } from "framer-motion";
import achie1 from "../assets/achie1.png";
import achie2 from "../assets/achie2.png";
import achie3 from "../assets/achie3.png";
import achie4 from "../assets/achie4.png";
import achie5 from "../assets/achie5.png";
import achie6 from "../assets/achie6.png";
import achie7 from "../assets/achie7.png";

import Image from "next/image";
import Link from "next/link";

type Props = {};

const Achievements = (props: Props) => {
  const achies = [
    {
      stt: 1,
      nameAchievement: "3th Class Award of Student Science Research – Hanoi University of Science and Technology",
      src: achie1,
    },
    {
      stt: 2,
      nameAchievement: "Certificate of merit for excellent achievement in Youth Union’s activities, awarded by the Vietnam Youth Union",
      src: achie2,
    },
    {
      stt: 3,
      nameAchievement: "Certificate of merit for outstanding student, Academic Year 2015-2016, awarded by Rector of Hanoi University of Science and Technology",
      src: achie3,
    },
    {
      stt: 4,
      nameAchievement: "Certificate of merit for outstanding student at HUST",
      src: achie4,
    },
    {
      stt: 5,
      nameAchievement: "ASTW 2016",
      src: achie5,
    },
    {
      stt: 6,
      nameAchievement: "Exchange with Kyushu University",
      src: achie6,
    },
    {
      stt: 7,
      nameAchievement: "One of seven students of Hanoi University of Science and Technology to be granted with DASAN Networking Corporation Scholarship",
      src: achie7,
    },
  ];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
      Achievements
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2cf9fa]/80">
        {achies.map((achie, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex-col xl:grid xl:grid-cols-2 space-y-6 item-center justify-center py-36 px-10 md:p-44 h-screen">
            <Image
              src={achie.src}
              alt="as"
              className="h-[200px] w-[1200px] xl:h-[400px] mx-auto rounded-lg"
            />
            <div className="space-y-3 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#2cf9fa]/50">
                  Achievement {i + 1} of {achies.length}
                </span>
                : {achie.nameAchievement}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
