import { Link as ScrollLink } from 'react-scroll';
import DownloadBtn from './downloadBtn';

/* eslint-disable max-len */
interface SideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function SideMenu({ closeMenu, isOpen }: SideMenuProps) {
  return (
    <div
      className={ `fixed top-16 right-0 h-full bg-gray-900 text-white p-5 w-64 transition-transform duration-700 ease-in-out transform z-10 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }` }
    >
      <nav>
        <ul className="flex flex-col items-center space-y-3">
          <li className="group relative">
            <ScrollLink
              to="home"
              smooth
              duration={ 500 }
              onClick={ closeMenu }
              className="block py-2 px-4"
            >
              Home
            </ScrollLink>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full" />
          </li>
          <li className="group relative">
            <ScrollLink
              to="about"
              smooth
              duration={ 500 }
              className="block py-2 px-4"
            >
              Sobre mim
            </ScrollLink>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full" />
          </li>
          <li className="group relative">
            <ScrollLink
              to="stacks"
              smooth
              duration={ 500 }
              className="block py-2 px-4"
            >
              Especialidades
            </ScrollLink>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full" />
          </li>
          <li className="group relative">
            <ScrollLink
              to="services"
              smooth
              duration={ 500 }
              className="block py-2 px-4"
            >
              Meus Trabalhos
            </ScrollLink>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full" />
          </li>
          <li className="group relative">
            <ScrollLink
              to="contact"
              smooth
              duration={ 500 }
              className="block py-2 px-4"
            >
              Entre em Contato
            </ScrollLink>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full" />
          </li>
          <li>
            <DownloadBtn />
          </li>
        </ul>
      </nav>
    </div>
  );
}
