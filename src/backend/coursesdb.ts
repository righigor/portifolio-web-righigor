import { Courses } from '../types/Courses';
import { descFundWeb, descDevFront, descIaGen } from './description.ts';
import certFundWeb from './certificates/fundamentos-desenvolvimento-web.pdf';

export const courses: Courses[] = [
  {
    id: 1,
    name: 'Fundamentos do Desenvolvimento Web',
    school_id: 1,
    description: descFundWeb,
    tags: ['tag'],
    certificate: {
      certificate_number: '123456',
      link: '123456',
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
    tags: ['tag'],
    certificate: {
      certificate_number: '123456',
      link: '123456',
      image: 'src',
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
    tags: ['tag'],
    certificate: {
      certificate_number: '123456',
      link: '123456',
      image: 'src',
    },
    date: {
      started_at: '12-2023',
      ended_at: '12-2023',
    },
  },
];
