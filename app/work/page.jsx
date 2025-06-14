"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Event Platform",
    title: "RepzYourStyle",
    description:
      "Malaysia's biggest street dance festival platform featuring dance battles, workshops, and cultural events. Featuring registration, payment, ticketing, and tracking management systems.",
    stack: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "AWS" },
      { name: "Firebase" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/RYS.webp",
    live: "https://repzyourstyle2025.web.app/",
    github: "",
  },
  {
    num: "02",
    category: "Event Platform Marketplace",
    title: "KitaPlan",
    description:
      "Born from the desire to make event planning effortless, KitaPlan is a comprehensive platform where vendors across various categories come together to showcase their services.",
    stack: [
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "DaisyUI" },
      { name: "Railway" },
    ],
    image: "/assets/work/KitaPlan.webp",
    live: "https://kitaplan.com",
    github: "",
  },
  {
    num: "03",
    category: "Artificial Intelligence",
    title: "AI Chatbot V2.0",
    description:
      "Using self-made API, a fully customisable interface and a standalone application AI chatbot with a wide range of features, including a knowledge base retrieval, and context-aware conversation.",
    stack: [
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "Deepseek" },
      { name: "DaisyUI" },
      { name: "Railway" },
      { name: "n8n" },
    ],
    image: "/assets/work/AI Chatbot V2.0.webp",
    live: "https://ai-chatbot-gui-production.up.railway.app/",
    github: "",
  },
  {
    num: "04",
    category: "AI Tourism Guide",
    title: "KakiJalan",
    description:
      "An AI-powered Telegram chatbot serving as a friendly virtual tour guide for Penang. Leveraging advanced RAG models to provide personalized, context-aware travel recommendations and cultural insights.",
    stack: [
      { name: "Telegram API" },
      { name: "PostgreSQL" },
      { name: "Deepseek" },
      { name: "Google Cloud" },
    ],
    image: "/assets/work/AI Chatbot.webp",
    live: "https://t.me/KakiJalanBot",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Portfolio Site",
    description:
      "With sleek design powered by Tailwind CSS and dynamic animations courtesy of Framer Motion, my site is a visual feast.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/2.png",
    live: "",
    github: "https://github.com/farishamy16/faris-hamy-portfolio",
  },
  {
    num: "06",
    category: "E-commerce",
    title: "LuvinSecret",
    description:
      "Powered by WordPress and seamlessly integrated APIs, my full-fledged online shop makes shopping a breeze.",
    stack: [
      { name: "Wordpress" },
      { name: "Hostinger" },
      { name: "ToyyibPay" },
      { name: "MyParcelAsia" },
    ],
    image: "/assets/work/3.png",
    live: "https://luvinsecret.com/",
    github: "",
  },
  {
    num: "07",
    category: "Full Stack",
    title: "Demo Web App",
    description:
      "It features CRUD functionality, secure authentication, and MongoDB integration for efficient data management.",
    stack: [{ name: "React.js" }, { name: "Next.js" }, { name: "Javascript" }],
    image: "/assets/work/1.png",
    live: "",
    github: "https://github.com/farishamy16/blogWebApp",
  },
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get real index for looped slides
    const realIndex = swiper.realIndex;
    // update project state based on real index
    setProject(projects[realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              {/* project category */}
              <h3 className="text-lg font-medium text-accent/80 uppercase tracking-wider -mt-4">
                {project.category}
              </h3>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
