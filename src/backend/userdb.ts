/* eslint-disable max-len */
import { differenceInYears } from 'date-fns';
import { Skills, User } from '../types/User';
import profile from '../images/assets/Foto 3x4.jpg';
import resume from './resume/resume-igor-righi.pdf';
import resumeEn from './resume/resume-igor-righi-en.pdf';
import {
  html, react, ts, js, cont, redux, css, front,
  back, python, docker, sql, poo, tailwind,
} from '../icons/skills';

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
    id: 13,
    skill: 'Tailwind CSS',
    icon: tailwind,
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

const birthDate = new Date('1999-09-13');
const age = differenceInYears(new Date(), birthDate);

const descAbout = `Olá! Meu nome é Igor Righi, tenho ${age} anos, sou estudante de desenvolvimento web na Trybe, onde venho aprendendo habilidades em programação e construção de projetos web. Estou entusiasmado em aplicar meu conhecimento e criatividade para enfrentar desafios e desenvolver soluções inovadoras. Sou dedicado, autodidata e estou sempre em busca de aprender e evoluir. Além dos meus estudos, gosto de futebol e torço para o Cruzeiro e de jogar jogos, como Hearthstone. Estou ansioso para contribuir e crescer na área de desenvolvimento web!`;

export const user: User = {
  id: 1,
  login: 'righigordev@gmail.com',
  password: '123456',
  name: 'Igor Righi',
  profilePic: profile,
  skills: skillsArray,
  about: descAbout,
  contact: {
    linkedin: 'https://www.linkedin.com/in/igor-righi/',
    github: 'https://github.com/righigor',
    instagram: 'https://www.instagram.com/righigor/',
    email: 'righigordev@gmail.com',
    wpp: 'https://wa.me/5531998397442/?text=Olá%20Igor%20Righi,%20tudo%20bem?',
  },
  resume: {
    en: resumeEn,
    pt: resume,
  },
};
