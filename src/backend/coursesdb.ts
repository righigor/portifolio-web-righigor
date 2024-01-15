import { Courses } from '../types/Courses';
import {
  descFundWeb, tagFundWeb,
  descDevFront, tagDevFront,
  descIaGen, tagIaGen,
  descCursoJava, tagCursoJava,
  descOOP, tagOOP,
  descIntroML, tagIntroML,
} from './description.ts';
import certFundWeb from './certificates/fundamentos-desenvolvimento-web.pdf';
import certFronDev from './certificates/desenvolvimento-front-end.pdf';
import certJava from './certificates/curso-de-java.pdf';
import certIaBoot from './certificates/bootcamp-ia-generativa-aws.png';

export const courses: Courses[] = [
  {
    id: 1,
    name: 'Fundamentos do Desenvolvimento Web',
    school_id: 1,
    description: descFundWeb,
    tags: tagFundWeb,
    certificate: {
      certificate_number: '',
      link: 'https://www.credential.net/0ec0a296-5a29-40d8-a78d-2b86e670c6b5#gs.3o53kg',
      image: certFundWeb,
    },
    date: {
      started_at: '03-2023',
      ended_at: '06-2023',
    },
  },

  {
    id: 2,
    name: 'Desenvolvimento Front-End',
    school_id: 1,
    description: descDevFront,
    tags: tagDevFront,
    certificate: {
      certificate_number: '',
      link: 'https://www.credential.net/5dd40996-f58e-4665-bef2-1a6ae95fd77e#gs.3o54ph',
      image: certFronDev,
    },
    date: {
      started_at: '06-2023',
      ended_at: '09-2023',
    },
  },

  {
    id: 3,
    name: 'Bootcamp: IA generativa com AWS',
    school_id: 1,
    description: descIaGen,
    tags: tagIaGen,
    certificate: {
      certificate_number: '487EDD435068',
      link: 'betry.be/badges/487EDD435068',
      image: certIaBoot,
    },
    date: {
      started_at: '12-2023',
      ended_at: '12-2023',
    },
  },

  {
    id: 4,
    name: 'Curso Online de Java',
    school_id: 2,
    description: descCursoJava,
    tags: tagCursoJava,
    certificate: {
      certificate_number: 'b5a27b14-bac5-411b-b2e7-13a42ab4a649',
      link: 'https://app.rocketseat.com.br/certificates/b5a27b14-bac5-411b-b2e7-13a42ab4a649',
      image: certJava,
    },
    date: {
      started_at: '10-2023',
      ended_at: '10-2023',
    },
  },

  {
    id: 5,
    name: 'Object-Oriented Programming in Python',
    school_id: 3,
    description: descOOP,
    tags: tagOOP,
    certificate: {
      certificate_number: '',
      link: '',
      image: '',
    },
    date: {
      started_at: '05-2022',
      ended_at: '05-2022',
    },
  },

  {
    id: 6,
    name: 'Introduction to Machine Learning and IA',
    school_id: 3,
    description: descIntroML,
    tags: tagIntroML,
    certificate: {
      certificate_number: '',
      link: '',
      image: '',
    },
    date: {
      started_at: '08-2022',
      ended_at: '08-2022',
    },
  },
];
