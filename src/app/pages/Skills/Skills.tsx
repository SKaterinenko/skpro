import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import antd from '../../../../public/antd.png';
import bitbucket from '../../../../public/bitbucket.png';
import bootstrap from '../../../../public/bootstrap.png';
import figma from '../../../../public/figma.png';
import gitlab from '../../../../public/gitlab.png';
import i18next from '../../../../public/i18next.png';
import jira from '../../../../public/jira.png';
import nextjs from '../../../../public/nextjs.png';
import react from '../../../../public/react.png';
import redux from '../../../../public/redux.png';
import rhf from '../../../../public/rhf.png';
import sass from '../../../../public/sass.png';
import swiper from '../../../../public/swiper.png';
import tailwind from '../../../../public/tailwind.png';
import typescript from '../../../../public/typescript.png';

const Skills = () => {
  const photos = [
    {
      alt: 'Typescript',
      src: typescript,
      link: 'https://www.typescriptlang.org/',
    },
    {
      alt: 'Ant Design',
      src: antd,
      link: 'https://ant.design/',
    },
    {
      alt: 'Bitbucket',
      src: bitbucket,
      link: 'https://bitbucket.org/',
    },
    {
      alt: 'React Bootstrap',
      src: bootstrap,
      link: 'https://react-bootstrap.github.io/',
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
      alt: 'Swiper',
      src: swiper,
      link: 'https://swiperjs.com/',
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
      alt: 'Jira',
      src: jira,
      link: 'https://www.atlassian.com/ru/software/jira',
    },
    {
      alt: 'Figma',
      src: figma,
      link: 'https://www.figma.com/',
    },
  ];
  return (
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
                className="lg:w-70 lg:h-70 md:w-20 md:h-20 w-10 h-10 "
                src={src}
                width={70}
                height={70}
                placeholder="blur"
                alt={alt}
              />
            </a>
          ))}
          <a className="flex justify-center md:justify-start" href="https://github.com/SKaterinenko">
            <FaGithub
              className="md:text-7xl text-4xl"
            />
          </a>
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
  );
};

export default Skills;
