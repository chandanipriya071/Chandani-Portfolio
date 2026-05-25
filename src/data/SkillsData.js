import { FaAws, FaCode, FaCss3Alt, FaJava } from 'react-icons/fa';
import {
  SiCanva,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiGit,
} from 'react-icons/si';

export const skillsCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: SiReact,
    accent: '#4f86ff',
    items: [
      { name: 'React', icon: SiReact, progress: 96, accent: '#4f86ff', iconColor: '#61dafb' },
      { name: 'HTML', icon: SiHtml5, progress: 95, accent: '#ef7f3d', iconColor: '#f97316' },
      { name: 'CSS', icon: FaCss3Alt, progress: 92, accent: '#18b7d1', iconColor: '#38bdf8' },
      { name: 'Next.js', icon: SiNextdotjs, progress: 88, accent: '#7c8596', iconColor: '#e5e7eb' },
    ],
  },

  {
    id: 'backend',
    title: 'Backend',
    icon: SiNodedotjs,
    accent: '#28c36a',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, progress: 88, accent: '#28c36a', iconColor: '#4ade80' },
      { name: 'Python', icon: SiPython, progress: 82, accent: '#d8a62d', iconColor: '#facc15' },
      { name: 'Java', icon: FaJava, progress: 70, accent: '#ef7f3d', iconColor: '#f97316' },
      { name: 'Docker', icon: SiDocker, progress: 74, accent: '#4f86ff', iconColor: '#38bdf8' },
    ],
  },

  {
    id: 'databases-tools',
    title: 'Databases & Tools',
    icon: SiMysql,
    accent: '#ef7f3d',
    items: [
      { name: 'MySQL', icon: SiMysql, progress: 78, accent: '#4f86ff', iconColor: '#38bdf8' },
      { name: 'MongoDB', icon: SiMongodb, progress: 74, accent: '#22c55e', iconColor: '#4ade80' },
      { name: 'AWS', icon: FaAws, progress: 72, accent: '#ef7f3d', iconColor: '#fb923c' },
    ],
  },

  {
    id: 'development-tools',
    title: 'Development Tools',
    icon: FaCode,
    accent: '#8b5cf6',
    items: [
      { name: 'GitHub', icon: SiGithub, progress: 92, accent: '#7c8596', iconColor: '#f8fafc' },
      { name: 'Git', icon: SiGit, progress: 90, accent: '#ef7f3d', iconColor: '#f97316' },
      { name: 'VS Code', icon: FaCode, progress: 95, accent: '#4f86ff', iconColor: '#38bdf8' },
      { name: 'Jupyter Notebook', icon: SiJupyter, progress: 68, accent: '#ef7f3d', iconColor: '#f97316' },
      { name: 'Canva', icon: SiCanva, progress: 60, accent: '#a855f7', iconColor: '#d8b4fe' },
    ],
  },
];

export default skillsCategories;
