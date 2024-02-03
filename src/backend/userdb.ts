import { Skills, User } from '../types/User';
import html from '../icons/skills/html-logo.svg';
import react from '../icons/skills/react-logo.svg';
import ts from '../icons/skills/ts-logo.png';
import js from '../icons/skills/js-logo.svg';
import cont from '../icons/skills/cont-logo.png';
import redux from '../icons/skills/redux-logo.png';
import css from '../icons/skills/css-logo.svg';
import front from '../icons/skills/front-logo.png';
import back from '../icons/skills/back-logo.png';
import python from '../icons/skills/python-logo.svg';
import docker from '../icons/skills/docker-logo.svg';
import sql from '../icons/skills/sql-logo.png';
import poo from '../icons/skills/poo-logo.png';

const skillsArray: Skills[] = [
  {
    id: 1,
    skill: 'React.JS',
    icon: react,
  },
  {
    id: 2,
    skill: 'TypeScript',
    icon: ts,
  },
  {
    id: 3,
    skill: 'JavaScript',
    icon: js,
  },
  {
    id: 4,
    skill: 'Context API & Hooks',
    icon: cont,
  },
  {
    id: 5,
    skill: 'Redux.JS',
    icon: redux,
  },
  {
    id: 6,
    skill: 'CSS/CSS Modules',
    icon: css,
  },
  {
    id: 7,
    skill: 'HTML5',
    icon: html,
  },
  {
    id: 8,
    skill: 'Desenvolvimento Front-End',
    icon: front,
  },
  {
    id: 9,
    skill: 'Desenvolvimento Back-End',
    icon: back,
  },
  {
    id: 10,
    skill: 'Python',
    icon: python,
  },
  {
    id: 11,
    skill: 'Docker',
    icon: docker,
  },
  {
    id: 12,
    skill: 'MySQL',
    icon: sql,
  },
  {
    id: 13,
    skill: 'Programação Orientada a Objetos',
    icon: poo,
  },
];

export const user: User = {
  id: 1,
  login: 'righigordev@gmail.com',
  password: '123456',
  name: 'Igor Righi',
  skills: skillsArray,
  contact: {
    linkedin: 'https://www.linkedin.com/in/igor-righi/',
    github: 'https://github.com/righigor',
    instagram: 'https://www.instagram.com/righigor/',
    email: 'righigordev@gmail.com',
    wpp: 'https://wa.me/5531998397442/?text=Olá%20Igor%20Righi',
  },
};
