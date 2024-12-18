/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */

import { useState } from 'react';
import logo from '../icons/logo/logo-ir-clean.png';

import BurgerMenu from './burgerMenu';
import SideMenu from './sideMenu';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="a">
              <span className="sr-only">Home</span>
              <img src={ logo } alt="" className="h-16" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li className="group relative">
                  <a
                    className="text-gray-100"
                    href="a"
                  >
                    {' '}
                    Sobre mim
                    {' '}
                  </a>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
                </li>

                <li className="group relative">
                  <a
                    className="text-gray-100"
                    href="a"
                  >
                    {' '}
                    Especialidades
                    {' '}
                  </a>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
                </li>

                <li className="group relative">
                  <a
                    className="text-gray-100"
                    href="a"
                  >
                    {' '}
                    Serviços
                    {' '}
                  </a>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
                </li>

                <li className="group relative">
                  <a
                    className="text-gray-100"
                    href="a"
                  >
                    {' '}
                    Meus Trabalhos
                    {' '}
                  </a>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
                </li>

                <li className="group relative">
                  <a
                    className="text-gray-100"
                    href="a"
                  >
                    {' '}
                    Entre em Contato
                    {' '}
                  </a>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full" />
                </li>
              </ul>
            </nav>

            <div
              className="block md:hidden z-50"
              role="button"
              tabIndex={ 0 }
              onClick={ () => setIsOpen(!isOpen) }
              onKeyDown={ (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsOpen(!isOpen);
                }
              } }
            >
              <div
                className="z-50"
              >
                <BurgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideMenu closeMenu={ closeMenu } isOpen={ isOpen } />
    </header>
  );
}
