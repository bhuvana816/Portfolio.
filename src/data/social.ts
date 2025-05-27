import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/bhuvana816",
    icon: Github
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhuvanasreesahithi16/",
    icon: Linkedin
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:bhuvanass2005@gmail.com",
    icon: Mail
  }
];

export default socialLinks;
