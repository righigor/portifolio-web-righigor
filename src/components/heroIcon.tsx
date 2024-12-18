/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/anchor-is-valid */

import HeroTitle from './heroTitle';
import wpp from '../icons/wpp-white-logo.svg';

/* eslint-disable max-len */
export default function HeroIcon() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1>
            <HeroTitle />
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Sou Igor Righi, desenvolvedor web full-stack, especializado em React, TypeScript e TailwindCSS com foco em criações Web.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-xl border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white duration-500 ease-in-out hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Meus Projetos
            </a>

            <a
              className="block w-full rounded-xl border border-blue-600 px-12 py-3 text-sm font-medium text-white duration-500 ease-in-out hover:bg-green-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="https://wa.me/5531998397442"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="inline-block w-6 h-6 mr-2"
                src={ wpp }
                alt="WhatsApp"
              />
              Vamos Trabalhar Juntos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
