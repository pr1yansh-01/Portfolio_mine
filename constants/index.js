import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import LeetcodeIcon from "./../public/assets/icons/leetcode.svg";
import CodeforcesIcon from "./../public/assets/icons/code-forces.svg";
// import CodechefIcon from "./../public/assets/phptos/icons8-codechef-48.svg";
import CodechefIcon from "./../public/assets/photos/icons8-codechef-48.svg";
const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/cpp.png",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    // {
    //   name: "Flutter",
    //   icon: "/assets/tech/flutter.svg",
    //   link: "https://flutter.dev/",
    // },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    // {
    //   name: "Yarn",
    //   icon: "/assets/tech/yarn.svg",
    //   link: "https://yarnpkg.com/",
    // },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    // {
    //   name: "Firebase",
    //   icon: "/assets/tech/firebase.svg",
    //   link: "https://firebase.google.com/",
    // },
    // {
    //   name: "MySQL",
    //   icon: "/assets/tech/my-sql.png",
    //   link: "https://www.mysql.com/",
    // },
  ],
};

const experiences = [
  {
    title: "CP-Wing Member",
    company_name: "TPC IIITDMJ",
    icon: "/assets/company/TPC.jpeg",
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Competitive core member of the Programming Club at IIITDM Jabalpur, actively contributing to the institute’s competitive programming ecosystem.",

      "Mentored 50+ students in competitive programming, data structures, and algorithms, guiding them through structured practice and contests.",

      "Regularly participated in and promoted coding contests to encourage problem-solving and consistency.",

      "Organized and managed multiple coding events, workshops, and hackathons within the college.",

      "Collaborated with the core team to build a strong peer-learning and coding culture on campus.",
      "Organisers for Hackbyte 3.0 (March 2025), responsible for outreach and communications.",
      "Drafted sponsorship proposals and professional emails, securing participation from multiple institutes and contributing to the event being 4× larger than the previous year.",
    ],
  },
  {
    title: "Alumni Cell Coordinator",
    company_name: "Alumni Cell",
    icon: "/assets/company/logo.png",
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Alumni Cell Coordinator at IIITDM Jabalpur, responsible for strengthening and maintaining long-term engagement with the institute’s alumni network.",

      "Successfully organized a large-scale Alumni Meet (December 2025), coordinating logistics and engagement for a flagship institute-level event.",

      "Invited and hosted 50+ alumni from diverse professional backgrounds, ensuring smooth communication and participation.",

      "Managed and coordinated with alumni across the globe, maintaining an updated alumni database and regular outreach.",

      "Collaborated with faculty and student teams to execute the event efficiently, fostering meaningful alumni–student interactions.",
    ],
  },
  {
    title: "Training and Placement Cell Representative",
    company_name: "Training and Placement Cell - IIITDMJ",
    icon: "/assets/company/logo.png",
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Training & Placement Cell Representative at IIITDM Jabalpur, acting as a liaison between students, the institute, and recruiting organizations.",

      "Assisted in coordinating campus recruitment drives, pre-placement talks, and internship processes.",

      "Communicated with recruiters and alumni to facilitate placement and internship opportunities for students.",

      "Supported data collection, student coordination, and logistical planning for smooth execution of placement activities.",

      "Worked closely with the T&P team to streamline communication and improve student participation in training and placement initiatives.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "HireCraft",
    description:
      "Creating an Amazon Clone using HTML, CSS, and JavaScript involves several steps to replicate the look and functionality of the Amazon website. Here is a brief overview of the process:",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/amazon.jpg",
    source_code_link: "https://github.com/pr1yansh-01/talent-IQ",
    deployed_link: "",
  },
  {
    name: "EduDesk",
    description:
      "In this project we will create a virtual girlfriend chatbot, but feel free to use what you'll learn to build your own support assistant, language teacher, or any ideas you have in mind!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/AI-Girlfriend.jpeg",
    source_code_link: "https://github.com/pr1yansh-01/EduDesk",
    deployed_link: "#",
  },
  {
    name: "Civi-AI-RESUME BUILDER ",
    description:
      "The Lazarev website clone is a recreated version of the Lazarev digital product design agency's website, often developed for practice or showcasing frontend development skills. It features elegant design, intricate animations, and interactivity, built using technologies like HTML, CSS, and JavaScript. Some clones highlight specific offerings, such as showcasing unique cinematography equipment or simulating the agency's focus on engaging user experiences and business growth!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/Civi.png",
    source_code_link: "https://github.com/pr1yansh-01/Civi-AI-Resume-Builder",
    deployed_link: "https://civi-ai.netlify.app/",
  },
  {
    name: "CPTracker",
    description:
      "Creating a 3D animated website using HTML, CSS, and JavaScript involves combining advanced CSS properties like transform and perspective with JavaScript for interactivity. For scrolling animations, libraries like Three.js or Canvas are commonly used to achieve smooth 3D effects. Such projects can include interactive 3D models, immersive environments, or dynamic effects like rotating objects and scrolling scenes. Examples include creating 3D rooms or implementing engaging scrolling animations for websites!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/CPTracker.png",
    source_code_link: "https://github.com/pr1yansh-01/CPTracker",
    deployed_link: "",
  },
  {
    name: "SPT-Stock Portfolio Tracker",
    description:
      "SPT: A comprehensive **Data Structures and Algorithms** demonstration project that implements a real-world stock portfolio management system using C++.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      // {
      //   name: "fabricjs",
      //   color: "orange-text-gradient",
      // },
      // {
      //   name: "liveblocks",
      //   color: "yellow-text-gradient",
      // },
    ],
    image: "/assets/projects/SPT.png",
    source_code_link:
      "https://github.com/priyansh7124/Stock-Portfolio-Tracker.",
    deployed_link:
      "https://satyamshorrf.github.io/Lisa-Chatbot-Virtual-Assistant/",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Creating a financial website using Three.js can involve incorporating interactive 3D models to visualize data, like dynamic graphs, pie charts, or financial trends. Three.js is a JavaScript library that simplifies creating WebGL-powered 3D graphics in the browser. For example, you could develop a 3D dashboard with rotating charts or interactive models that represent market behavior, enabling users to interact with financial data in an immersive way. The library's versatility allows for lightweight yet visually stunning implementations suitable for various financial use cases!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "3D-Models",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
      {
        name: "Elevenlabs",
        color: "green-text-gradient",
      },
      {
        name: "react/react-fiber",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/tictactoe.png",
    source_code_link: "https://github.com/pr1yansh-01/Tic-Tac-Toe",
    deployed_link: "https://pr1yansh-01.github.io/Tic-Tac-Toe/",
  },
  // {
  //   name: "TPC Madhepura",
  //   description:
  //     "As a 2nd-year BCA student, you can create a Friend Circle website using HTML, CSS, and JavaScript. This project can allow users to connect with their friends and display their social media profiles. Key features can include: Profile Cards: Use HTML and CSS to design individual profile cards with each friend's name, picture, and social media icons linked to their accounts; Add Friends Feature: Implement a feature to add friends using a form and a Friends Mapping structure in JavaScript or backend logic; Responsive Design: Ensure the website works across devices using media queries and responsive layouts; Theme Customization: Allow users to customize the look of the website with light/dark themes; Interactive Features: Use JavaScript for animations, interactive menus, or showing/hiding details dynamically. This project can serve as a practical introduction to web development concepts and enhance your skills!",
  //   tags: [
  //     {
  //       name: "typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "3D-Models",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "node.js",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "tanstack/react-query",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "OpenAI",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "Elevenlabs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react/react-fiber",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/TPC-Madhepura.png",
  //   source_code_link: "https://github.com/satyamshorrf/TPC-Madhepura",
  //   deployed_link: "https://tpc-madhepura.vercel.app",
  // },
  // {
  //   name: "Responsive Construction Website",
  //   description:
  //     "Responsive Construction Website Design Using HTML CSS And JavaScript - Contains animations when scrolling. - Smooth scrolling in each section. - Developed first with the Mobile First methodology, then for desktop. - Compatible with all mobile devices and with a beautiful and pleasant user interface.",
  //   tags: [
  //     {
  //       name: "typescript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "3D-Models",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "node.js",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "tanstack/react-query",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "OpenAI",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "Elevenlabs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react/react-fiber",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/construction.png",
  //   source_code_link:
  //     "https://github.com/satyamshorrf/Responsive-Construction-Website",
  //   deployed_link:
  //     "https://satyamshorrf.github.io/Responsive-Construction-Website/",
  // },
];

const socials = [
  {
    id: "Github",
    icon: <GithubIcon />,
    link: "https://github.com/pr1yansh-01",
  },
  {
    id: "Linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/priyansh-agrawal-5622b32ab/",
  },
  {
    id: "Leetcode",
    icon: <LeetcodeIcon />,
    link: "https://leetcode.com/u/priyansh_07/",
  },
  {
    id: "Codeforces",
    icon: <CodeforcesIcon />,
    link: "https://codeforces.com/profile/priyansh_01",
  },
  {
    id: "CodeChef",
    icon: <CodechefIcon />,
    link: "https://www.codechef.com/users/pr1yansh_01",
  },

  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/satyamshorrf",
  // },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://instagram.com/satyamshorrf",
  // },
];

const heroTexts = [
  "Full-Stack developer",
  500,
  "Competitive Programmer",
  500,
  "Backend developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  socials,
  heroTexts,
};
