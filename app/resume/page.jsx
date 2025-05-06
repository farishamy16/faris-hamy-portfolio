"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaNpm,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPostman,
  SiMongodb,
  SiDaisyui,
  SiNestjs,
  SiSupabase,
  SiRailway,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I'm like a curious sponge, soaking up knowledge and always hungry for growth. My compass points toward success, and my discipline keeps me on course. With a rocket-fueled self-motivation, I thrive in team orbits, sparking connections with fellow explorers.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Faris Hamy",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+60) 19 524 6662",
    },
    {
      fieldName: "Experience",
      fieldValue: "Mid-Level",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Malaysian",
    },
    {
      fieldName: "Email",
      fieldValue: "hamyfaris.99@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Mandarin, Malay",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Passionate about bridging business and technology, creating impactful solutions that drive innovation.",
  items: [
    {
      company: "KitaPlan",
      position: "Founder & AI Software Engineer",
      duration: "May 2025 - Present",
    },
    {
      company: "Anhsin Technology Sdn Bhd",
      position: "Full Stack Developer",
      duration: "December 2024 - May 2025",
    },
    {
      company: "Kiddocare Malaysia",
      position: "Product Manager",
      duration: "October 2024",
    },
    {
      company: "Independent Fund Manager",
      position: "Automation Python Developer",
      duration: "Mar 2024 - July 2024",
    },
    {
      company: "LuvinSecret Enterprise",
      position: "Founder",
      duration: "Aug 2020 - Feb 2024",
    },
    {
      company: "IIESM UiTM Shah Alam",
      position: "Researcher (Internship)",
      duration: "July 2022 - Aug 2022",
    },
    {
      company: "Duta Berkat Corporation Sdn Bhd",
      position: "Trainee Engineer (Internship)",
      duration: "Jan 2020 - Apr 2020",
    },
    {
      company: "SQUBE Event Space",
      position: "Private Tutor",
      duration: "Mar 2020 - Apr 2020",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Since day one of my life, I've been committed to continuously improving my knowledge and skills.",
  items: [
    {
      institution: "Talent Labs, K-Youth Development Programme",
      degree: "Certified Associate in Business Analytics",
      duration: "July 2024 - October 2024",
    },
    {
      institution: "London App Brewery, Udemy",
      degree: "Full Stack Web Development Bootcamp",
      duration: "May 2024",
    },
    {
      institution: "London App Brewery, Udemy",
      degree: "Complete Python Pro Bootcamp",
      duration: "Feb 2024",
    },
    {
      institution: "UiTM Shah Alam",
      degree: "Degree in Mechanical Engineering",
      duration: "Oct 2020 - Aug 2023",
    },
    {
      institution: "UiTM Permatang Pauh",
      degree: "Diploma in Mechanical Engineering",
      duration: "Mar 2017 - Jul 2020",
    },
    {
      institution: "SMK Penang Free",
      degree: "Sijil Peperiksaan Malaysia (SPM)",
      duration: "Jan 2012 - Dec 2016",
    },
  ],
};

// skills data
const skills = {
  title: "Tech Stack",
  description:
    "A versatile blend of technical wizardry and creative problem-solving.",
  skillList: [
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiPostgresql />,
      name: "postgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
    },
    {
      icon: <SiDaisyui />,
      name: "daisyUI",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiPostman />,
      name: "postman",
    },
    {
      icon: <SiRailway />,
      name: "Railway",
    },
    {
      icon: <FaNpm />,
      name: "npm",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 pb-24 xl:py-0 xl:pb-32"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Tech Stack</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <div className="w-full h-[180px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-4 group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                          <p className="capitalize text-white/60 group-hover:text-accent/90 transition-all duration-300">
                            {skill.name}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
