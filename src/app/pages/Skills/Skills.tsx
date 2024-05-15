import { memo } from 'react';
import Image from 'next/image';
import antd from '../../../../public/antd.png';
import figma from '../../../../public/figma.png';
import fsd from '../../../../public/fsd.png';
import gitlab from '../../../../public/gitlab.png';
import i18next from '../../../../public/i18next.png';
import jest from '../../../../public/jest.png';
import nextjs from '../../../../public/nextjs.png';
import react from '../../../../public/react.png';
import redux from '../../../../public/redux.png';
import rhf from '../../../../public/rhf.png';
import rtl from '../../../../public/rtl.png';
import sass from '../../../../public/sass.png';
import storybook from '../../../../public/storybook.png';
import tailwind from '../../../../public/tailwind.png';
import typescript from '../../../../public/typescript.png';
import webpack from '../../../../public/webpack.png';

const photos = [
  {
    alt: 'Typescript',
    src: typescript,
    link: 'https://www.typescriptlang.org/',
  },
  {
    alt: 'Jest',
    src: jest,
    link: 'https://jestjs.io/',
  },
  {
    alt: 'React testing library',
    src: rtl,
    link: 'https://testing-library.com/docs/react-testing-library/intro/',
  },
  {
    alt: 'Storybook',
    src: storybook,
    link: 'https://storybook.js.org/',
  },
  {
    alt: 'i18next',
    src: i18next,
    link: 'https://react.i18next.com/',
  },
  {
    alt: 'Next.js',
    src: nextjs,
    link: 'https://nextjs.org/',
  },
  {
    alt: 'Redux Toolkit',
    src: redux,
    link: 'https://redux-toolkit.js.org/',
  },
  {
    alt: 'React Hook Form',
    src: rhf,
    link: 'https://react-hook-form.com/',
  },
  {
    alt: 'Sass',
    src: sass,
    link: 'https://sass-lang.com/',
  },
  {
    alt: 'FSD',
    src: fsd,
    link: 'https://feature-sliced.design/ru/',
  },
  {
    alt: 'Tailwind',
    src: tailwind,
    link: 'https://tailwindcss.com/',
  },
  {
    alt: 'Gitlab',
    src: gitlab,
    link: 'https://about.gitlab.com/',
  },
  {
    alt: 'Ant Design',
    src: antd,
    link: 'https://ant.design/',
  },
  {
    alt: 'Figma',
    src: figma,
    link: 'https://www.figma.com/',
  },
  {
    alt: 'Webpack',
    src: webpack,
    link: 'https://webpack.js.org/',
  },
];

const Skills = memo(() => (
  <div
    className="grid grid-cols-1 md:text-left text-center xl:grid-cols-2 w-full min-h-screen justify-center items-center snap-center relative duration-1000"
    id="skills"
  >
    <div>
      <h2 className="font-bold lg:text-5xl text-2xl mb-5">Я React Frontend Developer</h2>
      <p className="font-light lg:text-3xl text-xl mb-6">
        Для создания современных, высокоскоростных и
        адаптивных веб
        приложений, я использую такие технологии как:
      </p>
      <div className="grid md:grid-cols-5 xl:grid-cols-5 grid-cols-3 mt-5 gap-y-7">
        {photos.map(({ src, alt, link }) => (
          <a
            key={Math.random()}
            className="flex justify-center md:justify-start"
            rel="noopener noreferrer"
            target="_blank"
            href={link}
          >
            <Image
              className="lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] w-[40px] h-[40px] "
              src={src}
              width={80}
              height={80}
              placeholder="blur"
              alt={alt}
            />
          </a>
        ))}
      </div>
    </div>
    <div className="hidden xl:flex justify-center">
      <a className="flex justify-center" href="https://react.dev/" rel="noopener noreferrer" target="_blank">
        <Image
          className="object-contain"
          src={react}
          width={400}
          height={400}
          placeholder="blur"
          alt="React"
        />
      </a>
    </div>
  </div>
));

export default Skills;
