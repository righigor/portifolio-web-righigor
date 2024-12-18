/* eslint-disable max-len */
import { TextGenerateEffect } from './ui/text-generate-effect';

const title = 'Criando Soluções Digitais para Você!';

export default function HeroTitle() {
  return (<TextGenerateEffect
    words={ title }
  />);
}
