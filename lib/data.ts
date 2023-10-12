import React from 'react';
import { LuGraduationCap } from "react-icons/lu";
import JavaScriptFrameworksImg from "@/public/js_ca.png";
import mollifyImg from "@/public/mollify.png";
import SemesterProjectImg from "@/public/proj2.png";



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
    description: "An online auction platform...",
    tags: ["Online Auctions", "User Registration", "Credit System", "Listing Management"],
    imageUrl: SemesterProjectImg,
    liveDemoLink: "https://example.com/live-demo-link",
    githubLink: "https://github.com/Ousman37/BidBay-Platform",
  },
  {
    title: "JavaScript Frameworks CA",
    description: "A dynamic e-commerce platform built using React and Tailwind CSS. Users can explore job listings, apply filters, and make purchases. This project expanded my front-end development expertise and introduced me to e-commerce web development.",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: JavaScriptFrameworksImg,
    liveDemoLink: "https://github.com/Ousman37/react-ecom-store",
    githubLink: "https://chic-rugelach-72313f.netlify.app/",
  },  
  {
    title: "Project Exam 2 (Mollify)",
    description: "Mollify is a dynamic Learning Management System (LMS) for markdown content management. It includes features like content search, bookmarking, text-to-speech, an AI assistant, and a WYSIWYG markdown editor. Developed as a Lerna monorepo with key technologies like Lerna, SvelteKit, TypeScript, Tailwind, and Vite.",
    tags: ["LMS", "CLI", "Text-to-Speech", "AI Assistant", "Markdown Editor", "Monorepo"],
    imageUrl: mollifyImg,
    liveDemoLink: "https://example.com/live-demo-link", // Add the live demo link here
    githubLink: "https://github.com/Fermain/-mollify/tree/master",
  },
] as const;


export const skillsData = [
  {
    section: "Technical Skills",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Prisma",
      "MongoDB",
      "Express.js",
      "Framer Motion",
      "Shadcn (ui)",
      "Figma",
      "Responsive Web Design",
      "Cross-browser Compatibility",
      "RESTful APIs",
      "User Experience (UX) Design",
      "User Interface (UI) Design",
      
    ],
  },
  {
    section: "Frameworks",
    skills: [  "Tailwind CSS", "Bootstrap", "SCSS (Sass)"], // Add your frameworks here
  },
  {
    section: "Workflow",
    skills: [
      "Version Control",
      "Node.js",
      "Git",
      "GitHub",
      "GitHub Project",
      "Agile/Scrum Methodology",
      "Trello",
      "Other Tools",
      
    ],
  },
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

] as const;
