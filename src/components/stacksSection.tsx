/* eslint-disable max-len */
import { StacksCloud } from './stacksCloud';
import mala from '../icons/suitcase.png';

export default function StacksSection() {
  return (
    <div
      className="flex flex-col size-full items-center text-center justify-center overflow-hidden bg-gray-900 px-8"
    >
      <div className="text-2xl text-white flex gap-4 justify-center items-center content-center">
        <h2>Minha Bagagem de Desenvolvimento</h2>
        <img src={ mala } alt="Mala de viagem" className="h-10 animate-pulse" />
      </div>
      <StacksCloud />
    </div>
  );
}
