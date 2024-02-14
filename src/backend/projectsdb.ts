import { Projects } from '../types/Projects';
import trybelogo from '../images/trybe-logo.png';
import { descAppReceitas, descFrontStore, descPasswordManager,
  descTestsReact, descTrybetunes, descTrybewarts, descBlogsApi,
  descNoteManager, descPollsApi } from './description';
import { twimg1, twimg2, twimg3, twimg4, twimg5,
  twimg6, twimg7, twheader } from './images/trybewarts';
import { pwimg1, pwimg2, pwimg3, pwimg4, pwheader } from './images/password-manager';
import { blogimg1, blogimg2, blogimg3, blogimg4, blogimg5,
  blogimg6, blogimg7, blogimg8, blogimg9, blogimg10,
  blogimg11, blogimg12, blogimg13, blogimg14, blogheader } from './images/blogs-api';
import { tunesheader } from './images/trybetunes';
import { rtlheader } from './images/tests-react';
import { storeheader } from './images/front-on-store';
import { recipeheader } from './images/recipe-app';
import { noteimg1, noteimg2, noteimg3, noteimg4,
  noteimg5, noteimg6, noteimg7, noteimg8, noteimg9,
  noteheader } from './images/notes-manager';
import { pollheader, pollimg1, pollimg2, pollimg3, pollimg4,
  pollimg5, pollimg6, pollimg7, pollimg8 } from './images/poll-api';
import { headerdelivery, deliveryimg1, deliveryimg2, deliveryimg3,
  deliveryimg4, deliveryimg5 } from './images/delivery-app';

export const projects: Projects[] = [
  {
    id: 1,
    name: 'Trybewarts',
    school_id: 1,
    description: descTrybewarts,
    tags: ['Front-End', 'CSS', 'JavaScript'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/01-Fundamentos/Secao05-HTML-e-CSS-Forms-Flexbox-Responsivo/Dia06-Projeto-Trybewarts',
    header: twheader,
    images: [twimg1, twimg2, twimg3, twimg4, twimg5, twimg6, twimg7],
  },
  {
    id: 2,
    name: 'Password Manager',
    school_id: 1,
    description: descPasswordManager,
    tags: ['Front-End', 'CSS', 'JavaScript'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao02-Intro-ao-React/Dia08-Projeto-Password-Manager',
    header: pwheader,
    images: [pwimg1, pwimg2, pwimg3, pwimg4],
  },
  {
    id: 3,
    name: 'Trybetunes',
    school_id: 1,
    description: descTrybetunes,
    tags: ['Front-End', 'CSS', 'React', 'TypeScript', 'API'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao03-Aprofundando-no-React/Dia04-Projeto-Trybetunes',
    header: tunesheader,
    images: [trybelogo],
  },
  {
    id: 4,
    name: 'Testes em React',
    school_id: 1,
    description: descTestsReact,
    tags: ['Front-End', 'RTL'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao04-Testes-Automatizados-com-React-Testing-Library/Dia04-Projeto-Testes-em-React',
    header: rtlheader,
    images: [trybelogo],
  },
  {
    id: 5,
    name: 'Frontend Online Store',
    school_id: 1,
    description: descFrontStore,
    tags: ['Front-End', 'React', 'TypeScript', 'API'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao05-Estilizacao-e-Metodologia-Agil/Dia04-Projeto-FrontEnd-Online-Store',
    header: storeheader,
    images: [trybelogo],
  },
  {
    id: 6,
    name: 'App de receitas',
    school_id: 1,
    description: descAppReceitas,
    tags: ['Front-End', 'React', 'TypeScript', 'API'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/02-Front-End/Secao08-Projeto-App-de-Receitas/Dia01-Projeto-App-de-Receitas',
    header: recipeheader,
    images: [trybelogo],
  },
  {
    id: 7,
    name: 'Blogs Api',
    school_id: 1,
    description: descBlogsApi,
    tags: ['Back-End', 'API', 'JavaScript', 'NodeJS', 'JWT', 'ORM'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/03-Back-End/Secao06-NodeJS-ORM-e-Autenticacao/Dia05-Projeto-API-de-Blogs',
    header: blogheader,
    images: [blogimg1, blogimg2, blogimg3, blogimg4, blogimg5, blogimg6, blogimg7,
      blogimg8, blogimg9, blogimg10, blogimg11, blogimg12, blogimg13, blogimg14],
  },
  {
    id: 8,
    name: 'Notes Manager',
    school_id: 2,
    description: descNoteManager,
    tags: ['React', 'Front-End', 'TypeScript', 'SeepchRecognition', 'Tailwind'],
    github_link: 'https://github.com/righigor/rocketseat/tree/main/nlw-expert/notes-app',
    header: noteheader,
    images: [noteimg1, noteimg2, noteimg3, noteimg4, noteimg5, noteimg6, noteimg7,
      noteimg8, noteimg9],
  },
  {
    id: 9,
    name: 'Polls Api',
    school_id: 2,
    description: descPollsApi,
    tags: ['Back-End', 'Prisma', 'TypeScript', 'WebSocket', 'Redis'],
    github_link: 'https://github.com/righigor/rocketseat/tree/main/nlw-expert/polls-app',
    header: pollheader,
    images: [pollimg1, pollimg2, pollimg3, pollimg4, pollimg5, pollimg6, pollimg7,
      pollimg8],
  },
  {
    id: 10,
    name: 'Delivery App',
    school_id: 2,
    description: 'Delivery App',
    tags: ['Mobile', 'Tailwind', 'ExpoGo', 'ReactNative', 'TypeScript'],
    github_link: 'https://github.com/righigor/rocketseat/tree/main/nlw-expert/delivery-app',
    header: headerdelivery,
    images: [deliveryimg1, deliveryimg2, deliveryimg3, deliveryimg4, deliveryimg5],
  },
  {
    id: 11,
    name: 'test',
    description: 'description',
    tags: ['tags', 'Python', 'Back-End'],
    github_link: 'link',
    header: '',
    images: ['img'],
  },
];
