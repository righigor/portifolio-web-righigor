/* eslint-disable max-len */
import { Schools } from '../types/Schools';
import trybeLogo from '../images/trybe-logo.png';
import rocketseatLogo from '../images/rocketseat-logo.png';
import raspLogo from '../images/Raspberry-Pi-logo.jpg';
import harvardLogo from '../images/harvard-logo.jpg';

export const schools: Schools[] = [
  {
    id: 1,
    name: 'Trybe',
    description: 'Uma escola de Tecnologia, fundada em 2019 com a missão da Trybe de gerar oportunidades na vida das pessoas. Por isso, possuímos comprometimento genuíno com o sucesso profissional de quem estuda aqui. Nossa forma de ensinar através de um currículo construído junto com o mercado, possibilitam que mais de +2000 estudantes da Trybe trabalhando na área de tecnologia.',
    image: trybeLogo,
  },

  {
    id: 2,
    name: 'Rocketseat',
    description: 'A coding school que reúne a maior comunidade de devs da América Latina e oferece uma plataforma completa de aprendizado contínuo em programação com diversas formações para profissionais de todos os níveis e momentos de carreira. Mais de 55 mil pessoas já passaram pela nossa escola e transformaram suas carreiras.',
    image: rocketseatLogo,
  },

  {
    id: 3,
    name: 'Raspberry PI Foundation',
    description: 'A Raspberry Pi Foundation, é uma organização sem fins lucrativos fundada em 2009 na Inglaterra para estimular o estudo básico de ciência da computação nas escolas, e é responsável pelo desenvolvimento de um computador de placa única chamado Raspberry Pi.',
    image: raspLogo,
  },

  {
    id: 4,
    name: 'Harvard University',
    description: 'A Escola de Engenharia e Ciências Aplicadas Harvard John A. Paulson (SEAS) é a escola de engenharia da Faculdade de Artes e Ciências da Universidade de Harvard, oferecendo cursos em engenharia e ciências aplicadas para alunos de pós-graduação admitidos diretamente no SEAS e para alunos de graduação admitidos primeiro em Harvard. Faculdade. Anteriormente, a Lawrence Scientific School e depois a Divisão de Engenharia e Ciências Aplicadas.',
    image: harvardLogo,
  },
];
