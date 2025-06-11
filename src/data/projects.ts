import { Project } from '../types';
import nykaaImage from './nykaa.png'; // Import the image directly

const projects: Project[] = [
  {
    id: "1",
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects. Built with React and Firebase, featuring real-time updates, drag-and-drop functionality, and team collaboration.",
    image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/bhuvana816/taskmanager",
    live: "https://taskmanager-eight-xi.vercel.app/",
    tags: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    id: "2",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills. Built with React, Tailwind CSS, and Framer Motion for animations.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/bhuvana816/Portfolio.",
    live: "https://portfolio-navy-five-88.vercel.app/#home",
    tags: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "3",
    title: "Nykaa Clone",
    description: "A Nykaa clone is an e-commerce platform replicating Nykaa’s core features for beauty, skincare, and wellness products. It offers smooth navigation, secure checkout, and admin control for easy marketplace deployment.",
    image: nykaaImage,
    github: "https://github.com/bhuvana816/nykaa",
    live: "https://portfolio2-f57f.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "Framer Motion"]
  }
];

export default projects;
