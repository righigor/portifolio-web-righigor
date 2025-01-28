import { useEffect, useRef } from "react";
import lottie from 'lottie-web';

interface AnimateIconsProps {
  animationData: any;
  size?: number;
  loopAnimation?: boolean;
}

export default function AnimateIcons({animationData,size = 50, loopAnimation = false}: AnimateIconsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationData,
      });

      return () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }
  }, [animationData]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      loopAnimation ? animationRef.current.loop = true : animationRef.current.loop = false;
      animationRef.current.setDirection(1)
      animationRef.current.play();
    }
  }

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.loop = false;
      animationRef.current.setDirection(-1)
      animationRef.current.play();
    }
  }

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    />
  );
}