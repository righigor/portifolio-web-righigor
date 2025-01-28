/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { Link as ScrollLink } from 'react-scroll';
import { Rocket, Wallet } from 'lucide-react';
import { firstLetterUpper } from '../../../utils/firstLetterUpper';
import { BoxReveal } from '../../ui/box-reveal';
import logo from '@/icons/logo/logo-ir-clean.png';
import CtaButton from '../../cta/ctabtn';
import headerLP from '/public/header-lp.png';

interface HeaderProps {
  nome?: string;
}

export default function Header({ nome = 'cliente' }: HeaderProps) {
  return (
    <header className="flex flex-col mx-auto max-w-screen-xl px-4 py-16 md:py-8 lg:h-full">
      <div className="mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="w-full">
          <BoxReveal duration={ 0.5 }>
            <img
              src={ logo }
              alt="Logo Igor Righi"
              className="size-24 w-auto top-0 left-0 md:size-28"
            />
          </BoxReveal>
        </div>
        <BoxReveal boxColor="#5046e6" duration={ 1 }>
          <h2 className="text-4xl font-bold text-center">
            Olá,
            {' '}
            {firstLetterUpper(nome)}
            ! 👋 
            <br />
            Vamos criar sua Landing Page
            incrível?
          </h2>
        </BoxReveal>
        <BoxReveal duration={ 1 }>
          <p className="mt-4 text-lg text-center">
            Aqui está um orçamento personalizado para o seu projeto. Confira os
            detalhes abaixo e vamos transformar sua ideia em realidade!
          </p>
        </BoxReveal>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div>
            <BoxReveal duration={ 1 }>
              <ScrollLink to="descricao" smooth duration={ 500 }>
                <CtaButton>
                  <Rocket size={ 20 } />
                  Vamos começar!
                </CtaButton>
              </ScrollLink>
            </BoxReveal>
          </div>
          <div>
            <BoxReveal duration={ 1 }>
              <ScrollLink to="precos" smooth duration={ 500 }>
                <CtaButton>
                  <Wallet size={ 20 } />
                  Ver preços
                </CtaButton>
              </ScrollLink>
            </BoxReveal>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12">
          <BoxReveal duration={ 1 }>
            <img
              src={ headerLP }
              alt="Ilustração de desenvolvimento web gerada por IA"
              className="h-64 md:h-72 w-auto"
            />
          </BoxReveal>

        </div>
      </div>

    </header>
  );
}
