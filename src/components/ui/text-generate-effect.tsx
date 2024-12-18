/* eslint-disable max-len */
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '../../lib/utils';

export function TextGenerateEffect({
  words,
  className = '',
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={ scope }>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={ word + idx }
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              style={ {
                filter: filter ? 'blur(10px)' : 'none',
              } }
            >
              {word}
              {' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={ cn('font-bold ', className) }>
      <div className="mt-4">
        <div className="text-4xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
}
