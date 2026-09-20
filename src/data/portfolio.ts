export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const profile = {
  name: 'Palamani Keerthi',
  title: 'Python Full-Stack Developer',
  tagline:
    'Building Modern Web Applications with Python, Frontend & Backend Technologies.',
  location: 'Nagayalanka',
  email: 'palamanikeerthi4@gmail.com',
  phone: '7416383239',
  summary:
    'I am an aspiring Python Full Stack Developer with a strong foundation in Python, HTML, CSS, JavaScript, and SQL. I am passionate about developing responsive and user-friendly web applications and continuously improving my problem-solving and programming skills. I enjoy learning new technologies, building practical projects, and turning ideas into real-world solutions. I am looking forward to starting my career as a software developer and contributing to a professional development team.',
  social: {
    github: 'https://github.com/keerthipalamani2005',
    linkedin: '#',
    twitter: '#',
  },
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'DOM Manipulation'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Python Functions & OOP', 'Backend Development', 'REST API Basics'],
  },
  {
    category: 'Database',
    items: ['SQL', 'MySQL'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Communication', 'Teamwork', 'Quick Learning', 'Time Management'],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Fresher | Aspiring Python Full Stack Developer',
    company: 'Entry Level',
    period: '2024 — Present',
    description:
      'I am a fresher currently developing my skills in Python Full Stack Development. I have been learning Python, HTML, CSS, JavaScript, and SQL and focusing on improving my programming and problem-solving abilities. I am eager to apply my knowledge to real-world applications, learn from experienced professionals, and begin my career in the software industry.',
  },
];

export const projects: Project[] = [
  {
    title: 'E-Commerce Website',
    description:
      'A full-featured e-commerce website with product listings, shopping cart, and a responsive UI. Built using Django for the backend, React for the frontend, and integrated with a MySQL database. Version controlled with Git and GitHub.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Django', 'React', 'GitHub'],
    link: 'https://github.com/keerthipalamani2005',
  },
];
