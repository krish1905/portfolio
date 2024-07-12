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
    uofg,
    ovra,
    vnc,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: mobile,
    },
    {
      title: "Data Scientist",
      icon: backend,
    },
    {
      title: "Cybersecurity Enthusiast",
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
      title: "Research Assistant",
      company_name: "University of Guelph",
      icon: uofg,
      iconBg: "#3e3e3e",
      date: "May 2024 - August 2024",
      points: [
        "Conducting analysis of global fandoms on social media to identify evidence of social support using Reddit and Twitter data.",
        "Utilizing PRAW for data scraping and preprocessing to prepare data for analysis.",
        "Employing various topic modeling techniques, including BERTopic, NMF, and LDA, to categorize social media posts into four types of social support.",
        "Training machine learning models based on categorized data to further analyze and understand social support dynamics in fandoms.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Ontario Virtual Reality Association (OVRA)",
      icon: ovra,
      iconBg: "#3e3e3e",
      date: "July 2023 - June 2024",
      points: [
        "Led the development and launch of the organization's website, increasing user engagement by 30%.",
        "Created 3D and AR models with Unity, adopted by over 5 school boards for enhanced educational experiences.",
        "Co-hosted an event with Microsoft, attracting 200+ attendees and promoting VR and AR technologies.",
        "Organized a hackathon at the University of Waterloo, engaging 50+ participants and fostering innovation in VR and AR.",
      ],
    },
    {
      title: "Intern Software Engineer",
      company_name: "Voice N Cloud",
      icon: vnc,
      iconBg: "#3e3e3e",
      date: "July 2022 - August 2022",
      points: [
        "Engineered an employee management system for Canada Post, used by 10,000 employees, as part of a team of four.",
        "Utilized .NET framework for full-stack development, enhancing the software development process by 20%.",
        "Implemented Continuous Integration (CI) techniques, reducing bugs and errors by 30%.",
        "Integrated front-end and back-end components, improving user experience and system performance by 25%.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };