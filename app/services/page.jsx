"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Build modern, responsive web applications using Next.js, React, and TypeScript. From registration portals to complex web systems, I deliver scalable solutions with clean code and optimal performance.",
    href: "",
  },
  {
    num: "02",
    title: "AI Development",
    description:
      "Develop intelligent AI solutions including custom chatbots, AI agents, and automation systems. Leverage cutting-edge AI technologies to create smart, context-aware applications that enhance business processes.",
    href: "",
  },
  {
    num: "03",
    title: "System Development",
    description:
      "Design and develop custom software systems using Python, NestJS, and modern databases (PostgreSQL, MongoDB). Specializing in automation, data processing, and business process optimization.",
    href: "",
  },
  {
    num: "04",
    title: "API Development & Integration",
    description:
      "Create robust RESTful APIs and seamlessly integrate third-party services. Using technologies like NestJS, Express, and Supabase to build secure and scalable backend solutions.",
    href: "",
  },
  {
    num: "05",
    title: "Technical Consultation",
    description:
      "Provide expert guidance on technology stack selection, system architecture, and development best practices. Help businesses make informed decisions about their technical infrastructure.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
