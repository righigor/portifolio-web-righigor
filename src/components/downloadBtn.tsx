/* eslint-disable max-len */
import { useRef, useState } from 'react';
import { LottieRefCurrentProps } from 'lottie-react';

import DownloadBtnIcon from './downloadBtnIcon';
import { Button } from './ui/moving-border';

type DirectionProps = 1 | -1;

export default function DownloadBtn() {
  const animationRef = useRef<LottieRefCurrentProps>(null);
  const [direction, setDirection] = useState<DirectionProps>(1);

  const handleClick = () => {
    if (animationRef.current) {
      animationRef.current.setDirection(direction);
      animationRef.current.play();
      setDirection(direction === 1 ? -1 : 1);
    }
  };
  return (
    <div>
      <Button
        borderRadius="2rem"
        className="bg-slate-900 text-white border-slate-800 transition-all duration-500 ease-in-out hover:bg-slate-800 hover:border-slate-700"
      >
        <div
          className="flex items-center gap-1"
        >
          <DownloadBtnIcon handleClick={ handleClick } animationRef={ animationRef } />
          Meu Currículo
        </div>
      </Button>
    </div>
  );
}
