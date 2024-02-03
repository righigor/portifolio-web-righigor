import { Projects } from '../types/Projects';
import trybelogo from '../images/trybe-logo.png';
import { descAppReceitas, descFrontStore, descPasswordManager,
  descTestsReact, descTrybetunes, descTrybewarts } from './description';
import { twimg1, twimg2, twimg3, twimg4, twimg5,
  twimg6, twimg7 } from './images/trybewarts';
import { pwimg1, pwimg2, pwimg3, pwimg4 } from './images/password-manager';

export const projects: Projects[] = [
  {
    id: 1,
    name: 'Trybewarts',
    school_id: 1,
    description: descTrybewarts,
    tags: ['Front-End', 'CSS', 'JavaScript'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/01-Fundamentos/Secao05-HTML-e-CSS-Forms-Flexbox-Responsivo/Dia06-Projeto-Trybewarts',
    images: [twimg1, twimg2, twimg3, twimg4, twimg5, twimg6, twimg7],
  },
  {
    id: 2,
    name: 'Password Manager',
    school_id: 1,
    description: descPasswordManager,
    tags: ['Front-End', 'CSS', 'JavaScript'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao02-Intro-ao-React/Dia08-Projeto-Password-Manager',
    images: [pwimg1, pwimg2, pwimg3, pwimg4],
  },
  {
    id: 3,
    name: 'Trybetunes',
    school_id: 1,
    description: descTrybetunes,
    tags: ['Front-End', 'CSS', 'React', 'TypeScript', 'API'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao03-Aprofundando-no-React/Dia04-Projeto-Trybetunes',
    images: [trybelogo],
  },
  {
    id: 4,
    name: 'Testes em React',
    school_id: 1,
    description: descTestsReact,
    tags: ['Front-End', 'RTL'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao04-Testes-Automatizados-com-React-Testing-Library/Dia04-Projeto-Testes-em-React',
    images: [trybelogo],
  },
  {
    id: 5,
    name: 'Frontend Online Store',
    school_id: 1,
    description: descFrontStore,
    tags: ['Front-End', 'React', 'TypeScript', 'API'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao05-Estilizacao-e-Metodologia-Agil/Dia04-Projeto-FrontEnd-Online-Store',
    images: [trybelogo],
  },
  {
    id: 6,
    name: 'App de receitas',
    school_id: 1,
    description: descAppReceitas,
    tags: ['Front-End', 'React', 'TypeScript', 'API'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao08-Projeto-App-de-Receitas/Dia01-Projeto-App-de-Receitas',
    images: [trybelogo],
  },
  {
    id: 7,
    name: 'test',
    description: 'description',
    tags: ['tags', 'Python', 'Back-End'],
    github_link: 'link',
    images: ['img'],
  },
];
