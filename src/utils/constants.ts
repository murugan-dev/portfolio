import type { IconType } from "react-icons";

export type TechStackItem = {
  techName: string;
  logo: IconType;
  color: string;
};

import {
  FaReact,
  FaJava ,
  FaHtml5,
  FaCss3,
  FaNodeJs ,
  FaSass,
} from "react-icons/fa";

import { GrMysql } from "react-icons/gr";
import { SiMui, SiTailwindcss, SiTypescript, SiJavascript,  SiMongodb } from "react-icons/si";

export const techStack: TechStackItem[] = [
  {
    techName: "React",
    logo: FaReact,
    color: "#61DBFB"
  },
  {
    techName: "Java",
    logo: FaJava,
    color: "#f89820" 
  },
  {
    techName: "SQL",
    logo: GrMysql,
    color: "#00758F" 
  },
  {
    techName: "HTML5",
    logo: FaHtml5 ,
    color: "#E44D26" 
  },
  {
    techName: "CSS3",
    logo: FaCss3,
    color: "#264de4" 
  },
  {
    techName: "Node.js",
    logo: FaNodeJs ,
    color: "#3C873A" 
  },
  {
    techName: "SCSS",
    logo: FaSass,
    color: "#CD6799" 
  },
  {
    techName: "MUI",
    logo: SiMui,
    color: "#007FFF" 
  },
  {
    techName: "Tailwind",
    logo: SiTailwindcss ,
    color: "#38BDF8" 
  },
  {
    techName: "TypeScript",
    logo: SiTypescript ,
    color: "#3178C6" 
  },
  {
    techName: "JavaScript",
    logo: SiJavascript,
    color: "#F7DF1E"
  },
  {
    techName: "MongoDB",
    logo: SiMongodb,
    color: "#47A248"
  }
];

export type Project = {
  title: string;
  description: string[];
  image: string;
  isLive: boolean,
  githubLink: string;
  liveDemoLink: string;
};

// Project images
import EcommerceApplicationImg from "../assets/Ecommerce_Application.png";
import PinterestCloneImg from "../assets/Pinterest_Clone.png";
import PhonePeCloneImg from "../assets/Phonepe_clone.png";
import FunFruitCloneImg from "../assets/Funfruit_clone.png";
import LinkedInCloneImg from "../assets/Linkedin_clone.png";
import RoleBasedAuthenticationImg from "../assets/RBAC_Board.png";
import SimanGameImg from "../assets/siman_game.png";
import QuizAppImg from "../assets/Quiz_app.png";
import TodoAppImg from "../assets/ToDo_app.png";

export const projects: Project[] = [
  {
    title: "Ecommerce Application",
    description: ["Developed a responsive and scalable e-commerce web application with a focus on seamless user experience and high performance using React.js and TypeScript.", "Implemented advanced features like lazy loading for product images, pagination, and promise-based API integrations to optimize load times and improve user interaction.", "Utilized Redux for efficient global state management, ensuring consistent and maintainable data flow across the application components."],
    image: EcommerceApplicationImg,
    isLive: true,
    githubLink: "https://github.com/murugan-dev/e-commerce-application",
    liveDemoLink: "https://e-commerce-application-b3jw.vercel.app/"
  },
  {
    title: "Role-Based Authentication",
    description: ["Developed a secure role-based authentication system with React.js frontend and Express.js backend, enabling access control based on user roles.", "Designed intuitive and dynamic UI components with Material UI, providing different dashboards and features for admins, users, and guests.", "Implemented custom middleware for authentication, authorization, and session management, ensuring robust security and smooth user experience."],
    image: RoleBasedAuthenticationImg,
    isLive: false,
    githubLink: "https://github.com/murugan-dev/RBAC-dashboard",
    liveDemoLink: "https://e-commerce-application-b3jw.vercel.app/"
  },
  {
    title: "Pinterest Clone",
    description: ["Built a fully responsive Pinterest-style image gallery using React.js, focusing on a clean and intuitive user interface styled with CSS.", "Integrated lazy loading for images and pagination to optimize performance and ensure smooth user experience even with large datasets.", "Utilized Redux for scalable state management and connected promise-based APIs for dynamic data retrieval and seamless content rendering."],
    image: PinterestCloneImg,
    isLive: true,
    githubLink: "https://github.com/murugan-dev/Pinterest-UI-Clone",
    liveDemoLink: "https://pinterest-ui-clone-iota.vercel.app/"
  },
  {
    title: "PhonePe Clone",
    description: ["Built a PhonePe-like digital payment UI using React.js with features like mobile recharges, bill payments, and transaction history.", "Designed a responsive and user-friendly layout with CSS, closely mimicking the original app's visual design and optimizing for cross-device compatibility.", "Focused on clean component architecture and dynamic routing to simulate real-time interactions, enhancing the overall user experience."],
    image: PhonePeCloneImg,
    isLive: true,
    githubLink: "https://github.com/murugan-dev/phonePe-UI-clone",
    liveDemoLink: "https://phone-pe-ui-clone.vercel.app/"
  },
  {
    title: "Fun Fruit Clone",
    description: ["Recreated the Fun Fruit landing page with pixel-perfect accuracy using HTML and Tailwind CSS, paying close attention to spacing, alignment, and responsive layout for all screen sizes.", "Leveraged Tailwind’s utility-first approach to build a clean, modular UI that is both mobile-friendly, easy to maintain, ensuring quick development and consistent styling.", "Highlighted interactive sections and animations to closely mirror the original site’s user experience and visual appeal"],
    image: FunFruitCloneImg,
    isLive: true,
    liveDemoLink: "https://fun-friut-ui-clone-e9uc.vercel.app/",
    githubLink: "https://github.com/murugan-dev/fun-friut-UI-clone"
  },
  {
    title: "LinkedIn Clone",
    description: ["Developed a LinkedIn-inspired social networking platform using React.js, replicating features like post creation, news feed, and user authentication.", "Integrated Firebase for real-time database operations, user login/signup with authentication, and cloud storage for profile data and posts.", "Designed a responsive and professional UI using Material UI, ensuring a consistent look and feel across devices with reusable components."],
    image: LinkedInCloneImg,
    isLive: false,
    githubLink: "https://github.com/murugan-dev/linkedin-clone",
    liveDemoLink: "https://linkedin-clone-pi-ruddy.vercel.app/"
  },
  {
    title: "Siman Game",
    description: ["Developed an interactive memory-based Simon Game using JavaScript, where users follow and repeat blinking patterns to advance through levels.", "Designed a responsive layout with HTML5 and CSS3, featuring four colored boxes that dynamically scale and animate as difficulty increases.", "Implemented game logic to track user input, manage levels, and provide real-time feedback, enhancing cognitive challenge and user engagement."],
    image: SimanGameImg,
    isLive: true,
    githubLink: "https://github.com/murugan-dev/siman-game",
    liveDemoLink: "https://siman-game.vercel.app/"
  },
  {
    title: "Quiz App",
    description: ["Developed a dynamic Quiz Application using React.js, featuring multiple-choice questions, real-time scoring, and interactive feedback for users.", "Designed a clean and responsive user interface with CSS, ensuring smooth user experience across desktop and mobile devices.", "Implemented state management to track question progress, user selections, and results, creating an engaging and functional quiz flow."],
    image: QuizAppImg,
    isLive: true,
    githubLink: "https://github.com/murugan-dev/Quiz-App",
    liveDemoLink: "https://quiz-app-eight-kohl-35.vercel.app/"
  },
  {
    title: "To Do Application",
    description: ["Developed a feature-rich task management application using Express.js, enabling users to create, read, update, and delete (CRUD) tasks with real-time server interaction.", "Designed a responsive and user-friendly interface with HTML and CSS, ensuring seamless usability and consistent performance across all devices", "Implemented server-side routing, modular code structure, and persistent task handling to maintain data efficiently."],
    image: TodoAppImg,
    isLive: false,
    githubLink: "https://github.com/murugan-dev/fullstack-Todo-App",
    liveDemoLink: "https://to-do-list-blue-seven.vercel.app/"
  },

];