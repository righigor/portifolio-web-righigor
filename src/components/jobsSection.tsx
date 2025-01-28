/* eslint-disable max-len */
import { HoverEffect } from './ui/card-hover-effect';

export function JobsSection() {
  return (
    <div className="bg-gray-900 px-6 min-h-screen" id="jobs">
      <h2 className="text-3xl text-center text-white font-bold">Trabalhos</h2>
      <HoverEffect items={ projects } />
    </div>
  );
}
export const projects = [
  {
    title: 'JBRG Advogados',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    link: 'https://jbrg.adv.br/',
  },
  {
    title: 'Brasiliela',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://www.brasiliela.com.br/',
  },
  {
    title: '',
    description: '',
    link: '',
  },
];
