
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Problem Solver",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Teacher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SECONDARY (X)",
    icon: starbucks,

    iconBg: "#383E56",
    date: "March 2015",
    points: [
      "Ramakrishna Mission Boys' Home, Rahara",
      "Percentage: 85.87%",
      "Board: WBBSE",
    ],
  },
  {
    title: "SENIOR SECONDARY (XII)",

    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2017",
    points: [
      "Barrackpore Government High School",
      "Percentage: 78.87%",
      "Board: WBCHSE",
    ],
  },
  {
    title: "College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2024",
    points: [
      "Government College of Engineering and Textile Technology , Berhampore",
      "CGPA: 9.62",
      "Branch: Computer Science and Engineering",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "E-commerce website that allows users to search for products, add them to their cart, and purchase them using Stripe.",
    tags: [
      {
        name: "node js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/manas6699/E-commerce",
  },
  {
    name: "Cng Locator",
    description:
      "A web app that allows users to search for CNG stations in their area and view their details, such as address, phone number, and hours of operation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Qr Code Authentication",
    description:
      "Made a QR code scanner app for authenticating users in our college fest Streamlined user authentication through QR code scanning with a PHP-powered backend",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "auth",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/manas6699/Qr-authenticaation",
  },
];

export { services, technologies, experiences, testimonials, projects };
