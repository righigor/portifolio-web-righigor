/* eslint-disable max-len */
import IconCloud from './ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'vercel',
  'testinglibrary',
  'cypress',
  'docker',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
  'tailwindcss',
  'python',
  'django',
  'flask',
  'mongodb',
  'fastify',
  'hostinger',
  'mocha',
  'mysql',
  'openai',
  'redux',
  'sqlite',
];

export function StacksCloud() {
  return (
    <div>
      <IconCloud iconSlugs={ slugs } />
    </div>
  );
}
