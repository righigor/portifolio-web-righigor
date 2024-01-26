import { User } from '../types/User';

const skillsArray = [
  'React.JS',
  'TypeScript',
  'JavaScript',
  'Context API & Hooks',
  'Redux.JS',
  'CSS/CSS Modules',
  'HTML5',
  'Desenvolvimento Front-End',
  'Desenvolvimento Back-End',
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
