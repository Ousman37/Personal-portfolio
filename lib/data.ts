import React from 'react';
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import JavaScriptFrameworksImg from "@/public/js_ca.png";
import mollifyImg from "@/public/mollify.png";
import SemesterProjectImg from "@/public/proj2.png";
// import TimelineEntryProps from "@/components/TimelineEntry";


export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;


export const projectsData = [
  {
    title: "Semester Project 2",
    description: "An online auction platform that allows registered users to create, bid on, and manage listings. Users receive an initial balance of 1000 credits upon registration, which they can use to place bids. Credits can also be earned by selling items on the platform. Non-registered visitors can browse and search through listings.",
    tags: ["Online Auctions", "User Registration", "Credit System", "Listing Management"],
    imageUrl: SemesterProjectImg, // Assuming you have imported an image
    link: "https://github.com/Ousman37/BidBay-Platform", // Replace with the actual URL of your project
  },
  {
    title: "JavaScript Frameworks CA",
    description: "A dynamic job board with e-commerce functionality built using React, TypeScript, Next.js, Tailwind CSS, and Redux. Users can browse job listings, apply filters, and add items to their cart for checkout. This project enhanced my front-end development skills and introduced me to e-commerce web development.",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: JavaScriptFrameworksImg,
    link: "https://chic-rugelach-72313f.netlify.app/", 
  },
  {
    title: "Project Exam 2 (Mollify)",
    description: "Mollify is a dynamic Learning Management System (LMS) for markdown content management. It includes features like content search, bookmarking, text-to-speech, an AI assistant, and a WYSIWYG markdown editor. Developed as a Lerna monorepo with key technologies like Lerna, SvelteKit, TypeScript, Tailwind, and Vite.",
    tags: ["LMS", "CLI", "Text-to-Speech", "AI Assistant", "Markdown Editor", "Monorepo"],
    imageUrl: mollifyImg,
    link: "https://github.com/Fermain/-mollify/tree/master",
  }

] as const;

export const skillsData = [
  // Technical Skills
  "HTML",
  "CSS",
  "SCSS (Sass)",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  // "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "MongoDB",
  "Express.js",
  "Framer Motion",
  "Shadcn (ui)",
  "Figma", // Design Tool
  "Responsive Web Design",
  "Cross-browser Compatibility",
  "RESTful APIs",
  "User Experience (UX) Design",
  "User Interface (UI) Design",
  "Version Control",
  "Agile/Scrum Methodology",
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer Graduate",
    location: "Noroff University College Norway",
    description:
      "Program started in October 2021 and concluded in October 2023.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  }
  
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
   
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
    
  // },
] as const;
