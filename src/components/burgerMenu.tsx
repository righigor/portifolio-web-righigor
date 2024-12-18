/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../icons/Burger menu/menu.json';

type DirectionProps = 1 | -1;

export default function BurgerMenu() {
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
    <button type="button" onClick={ handleClick }>
      <Lottie
        loop={ false }
        autoplay={ false }
        animationData={ animationData }
        rendererSettings={ { preserveAspectRatio: 'xMidYMid slice' } }
        lottieRef={ animationRef }
      />
    </button>
  );
}
