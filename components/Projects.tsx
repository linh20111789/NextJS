import React from "react";
import { motion } from "framer-motion";
import printer from "../assets/printer.png";
import gas from "../assets/gas.png";
import sdr from "../assets/sdr.jpg";
import pcapp from "../assets/pcapp.png";
import tpi_next from "../assets/tpi_next.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      stt: 1,
      nameProject: "Web application for Test Improvement Model (TPI Next)",
      src: tpi_next,
      Technologies: [
        "Ruby (RoR)",
        "PostgreSQL",
        "Redis",
        "Javascript",
        "CSS,Bootstrap",
        "HTML",
        "Jquery/Ajax",
        "Docker",
      ],
    },
    {
      stt: 2,
      nameProject: "GAS project",
      src: gas,
      Technologies: [
        "C#",
        ".NET framework",
        "TCP/IP",
        "OpenCV",
        "FFMPEG",
        "Activity diagram",
        "Sequence diagram",
      ],
    },
    {
      stt: 3,
      nameProject: "Printer",
      src: printer,
      Technologies: [
        "C/C++/Python",
        "Linux (Debian)",
        "Shell Script",
      ],
    },
    {
      stt: 4,
      nameProject: "SDR",
      src: sdr,
      Technologies: [
        "Embedded C",
        "Realtime OS",
        "SPI/I2C/UART",
        "Altium Designer",
      ],
    },
    {
      stt: 5,
      nameProject: "Window application for simulating “Central Control Board”",
      src: pcapp,
      Technologies: [
        "C++",
        "MFC",
        "COM",
      ],
    },
  ];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#2cf9fa]/80">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex-col xl:grid xl:grid-cols-2 space-y-5 item-center justify-center py-36 px-10 md:p-44 h-screen">
            <Image
              src={project.src}
              alt="as"
              className="h-[200px] w-[600px] xl:h-[400px] mx-auto rounded-lg"
            />
            <div className="space-y-3 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#2cf9fa]/50">
                  Project {i + 1} of {projects.length}
                </span>
                : {project.nameProject}
              </h4>
              <div className="grid grid-cols-2">
                <div className="col-span-1 flex flex-col">
                  <h4>Technology:</h4>
                  <ul className="grid grid-cols-2 text-xs gap-y-3 mt-3 lg:text-[14px] text-gray-400">
                    {project.Technologies.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
