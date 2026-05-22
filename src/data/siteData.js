import {
  FiSmartphone,
} from 'react-icons/fi';
import { SiFigma, SiFirebase, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';
import scpLogo from '../assets/scp-logo.jpg';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#resume' },
];

export const typingRoles = ['Frontend Developer', 'UI Engineer', 'React Specialist', 'Creative Coder'];

export const stats = [
  { value: '3+', label: 'Years building interfaces' },
  { value: '20+', label: 'Delivered projects' },
  { value: '12+', label: 'Happy clients' },
];

export const aboutHighlights = [
  'I am Chandani Kumari, a Computer Science and Engineering student at Vivekananda Global University with a strong interest in building practical, user-friendly web applications.',
  'I work with React, JavaScript, Tailwind CSS, and modern UI patterns to create responsive interfaces that are clean, fast, and easy to use.',
  'My experience includes projects like Smart Creation Point, where I focus on polished design, reusable components, and smooth user experiences across devices.',
];

export const skills = [
  { name: 'React', icon: SiReact, level: 'Expert' },
  { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Expert' },
  { name: 'Figma', icon: SiFigma, level: 'Advanced' },
  { name: 'Firebase', icon: SiFirebase, level: 'Intermediate' },
  { name: 'Responsive Design', icon: FiSmartphone, level: 'Expert' },
];

export const projects = [
  {
    title: 'Smart Creation Point',
    description: 'A one-stop e-commerce storefront focused on quality products, great prices, and exceptional service with a smooth shopping experience.',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'Full Stack',
    demo: 'https://smartcreationpoint.com/',
    github: 'https://github.com/chandanipriya071',
    image: scpLogo,
    imageMode: 'contain',
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek personal portfolio concept with bold typography, glassmorphism cards, and elegant motion.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
    category: 'UI/UX',
    demo: 'https://example.com',
    github: 'https://github.com/chandanipriya071',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
  },
];

export const experience = [
  {
    role: 'Frontend Developer',
    company: 'Remote / Freelance',
    period: '2023 - Present',
    details: 'Built responsive marketing sites, product dashboards, and reusable design systems for small teams and startups.',
  },
  {
    role: 'UI Developer',
    company: 'Creative Agency',
    period: '2021 - 2023',
    details: 'Translated design concepts into pixel-precise interfaces with smooth motion and mobile-first layouts.',
  },
  {
    role: 'Web Design Intern',
    company: 'Product Studio',
    period: '2020 - 2021',
    details: 'Supported landing page production, component reuse, and QA for responsive cross-browser experiences.',
  },
];

export const contactInfo = [
  {
    label: 'Email',
    value: 'chandanip54321@gmail.com',
    href: 'mailto:chandanip54321@gmail.com',
  },
  {
    label: 'Location',
    value: 'Available worldwide',
    href: '#contact',
  },
  {
    label: 'Focus',
    value: 'React, UI systems, motion design',
    href: '#projects',
  },
];