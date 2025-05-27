import { Project } from '../types';

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/username/ecommerce-project",
    live: "https://ecommerce-project.vercel.app",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects. Built with React and Firebase, featuring real-time updates, drag-and-drop functionality, and team collaboration.",
    image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/username/task-manager",
    live: "https://task-manager-app.vercel.app",
    tags: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A weather forecast application that displays current and future weather conditions for any location. Built with React and the OpenWeather API.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/username/weather-app",
    live: "https://weather-dashboard-app.vercel.app",
    tags: ["React", "API Integration", "Geolocation"]
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills. Built with React, Tailwind CSS, and Framer Motion for animations.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/bhuvana816/Portfolio.",
    live: "https://portfolio-navy-five-88.vercel.app/#home",
    tags: ["React", "Tailwind CSS", "Framer Motion"]
  }
];

export default projects;
