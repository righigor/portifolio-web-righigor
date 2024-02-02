import { Projects } from '../types/Projects';
import trybelogo from '../images/trybe-logo.png';
import { descTrybewarts } from './description';
import twimg1 from './images/trybewarts/print-site.png';
import twimg2 from './images/trybewarts/print-html-1.png';
import twimg3 from './images/trybewarts/print-html-2.png';
import twimg4 from './images/trybewarts/js.png';
import twimg5 from './images/trybewarts/css-1.png';
import twimg6 from './images/trybewarts/css-2.png';
import twimg7 from './images/trybewarts/css-3.png';
import pwimg1 from './images/password-manager/capa.png';
import pwimg2 from './images/password-manager/cadastro-1.png';
import pwimg3 from './images/password-manager/cadastro-2.png';
import pwimg4 from './images/password-manager/senha-cadastrada.png';

export const projects: Projects[] = [
  {
    id: 1,
    name: 'Trybewarts',
    school_id: 1,
    description: descTrybewarts,
    tags: ['Front-End'],
    github_link: 'https://github.com/righigor/trybe-exercicios/tree/main/01-Fundamentos/Secao05-HTML-e-CSS-Forms-Flexbox-Responsivo/Dia06-Projeto-Trybewarts',
    images: [twimg1, twimg2, twimg3, twimg4, twimg5, twimg6, twimg7],
  },
  {
    id: 2,
    name: 'Password Manager',
    school_id: 1,
    description: 'password',
    tags: ['Front-End'],
    github_link: 'link',
    images: [pwimg1, pwimg2, pwimg3, pwimg4],
  },
  {
    id: 3,
    name: 'Trybetunes',
    school_id: 1,
    description: 'trybetunes',
    tags: ['Front-End'],
    github_link: 'link',
    images: [trybelogo],
  },
  {
    id: 4,
    name: 'Testes em React',
    school_id: 1,
    description: 'testes',
    tags: ['Front-End'],
    github_link: 'link',
    images: [trybelogo],
  },
  {
    id: 5,
    name: 'Frontend Online Store',
    school_id: 1,
    description: 'store',
    tags: ['Front-End'],
    github_link: 'link',
    images: [trybelogo],
  },
  {
    id: 6,
    name: 'App de receitas',
    school_id: 1,
    description: 'receitas',
    tags: ['Front-End'],
    github_link: 'link',
    images: [trybelogo],
  },
];
