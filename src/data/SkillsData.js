import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaCode,
  FaPaintBrush,
  FaFileAlt,
} from 'react-icons/fa';
import { FaNodeJs, FaGithub } from 'react-icons/fa';

export const skillsCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: FaReact,
    items: [
      { name: 'HTML', icon: FaHtml5, progress: 95 },
      { name: 'CSS', icon: FaCss3Alt, progress: 92 },
      { name: 'Next.js', icon: FaCode, progress: 88 },
    ],
  },

  {
    id: 'backend',
    title: 'Backend',
    icon: FaNodeJs,
    items: [
      { name: 'Node.js', icon: FaNodeJs, progress: 88 },
      { name: 'Python', icon: FaPython, progress: 82 },
      { name: 'Java', icon: FaJava, progress: 70 },
    ],
  },

  {
    id: 'database',
    title: 'Database',
    icon: FaDatabase,
    items: [
      { name: 'MySQL', icon: FaDatabase, progress: 78 },
    ],
  },

  {
    id: 'tools',
    title: 'Tools',
    icon: FaCode,
    items: [
      { name: 'AWS', icon: FaAws, progress: 72 },
      { name: 'Git', icon: FaGitAlt, progress: 90 },
      { name: 'GitHub', icon: FaGithub, progress: 92 },
      { name: 'VS Code', icon: FaCode, progress: 95 },
      { name: 'Jupyter', icon: FaCode, progress: 68 },
      { name: 'Canva', icon: FaPaintBrush, progress: 60 },
    ],
  },

  {
    id: 'ms-office',
    title: 'MS Office',
    icon: FaFileAlt,
    items: [
      { name: 'Word', icon: FaFileAlt, progress: 85 },
      { name: 'Excel', icon: FaFileAlt, progress: 82 },
      { name: 'PowerPoint', icon: FaFileAlt, progress: 80 },
    ],
  },
];

export default skillsCategories;
