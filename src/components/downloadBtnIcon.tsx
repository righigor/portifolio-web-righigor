import Lottie, { LottieRefCurrentProps } from 'lottie-react';

import animationData from '../icons/Download/download.json';

interface DownloadBtnIconProps {
  handleClick: () => void;
  animationRef: React.RefObject<LottieRefCurrentProps>;
}

export default function DownloadBtnIcon(
  { handleClick, animationRef }: DownloadBtnIconProps,
) {
  return (
    <Lottie
      onClick={ handleClick }
      lottieRef={ animationRef }
      loop={ false }
      autoplay={ false }
      animationData={ animationData }
      rendererSettings={ { preserveAspectRatio: 'xMidYMid slice' } }
    />
  );
}
