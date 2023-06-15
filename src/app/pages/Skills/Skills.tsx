import Image from 'next/image';
import {FaGithub} from "react-icons/fa";
import typescript from "../../../../public/typescript.png";
import antd from "../../../../public/antd.png";
import bitbucket from "../../../../public/bitbucket.png";
import i18next from "../../../../public/i18next.png";
import nextjs from "../../../../public/nextjs.png";
import redux from "../../../../public/redux.png";
import rhf from "../../../../public/rhf.png";
import sass from "../../../../public/sass.png";
import swiper from "../../../../public/swiper.png";
import tailwind from "../../../../public/tailwind.png";
import gitlab from "../../../../public/gitlab.png";
import jira from "../../../../public/jira.png";
import figma from "../../../../public/figma.png";
import bootstrap from "../../../../public/bootstrap.png";

const Skills = () => {
    const photos = [
        {
            alt: "Typescript",
            src: typescript,
            link: "https://www.typescriptlang.org/",
        },
        {
            alt: "Ant Design",
            src: antd,
            link: "https://ant.design/",
        },
        {
            alt: "Bitbucket",
            src: bitbucket,
            link: "https://bitbucket.org/",
        },
        {
            alt: "React Bootstrap",
            src: bootstrap,
            link: "https://react-bootstrap.github.io/",
        },
        {
            alt: "i18next",
            src: i18next,
            link: "https://react.i18next.com/",
        },
        {
            alt: "Next.js",
            src: nextjs,
            link: "https://nextjs.org/",
        },
        {
            alt: "Redux Toolkit",
            src: redux,
            link: "https://redux-toolkit.js.org/",
        },
        {
            alt: "React Hook Form",
            src: rhf,
            link: "https://react-hook-form.com/",
        },
        {
            alt: "Sass",
            src: sass,
            link: "https://sass-lang.com/",
        },
        {
            alt: "Swiper",
            src: swiper,
            link: "https://swiperjs.com/",
        },
        {
            alt: "Tailwind",
            src: tailwind,
            link: "https://tailwindcss.com/",
        },
        {
            alt: "Gitlab",
            src: gitlab,
            link: "https://about.gitlab.com/",
        },
        {
            alt: "Jira",
            src: jira,
            link: "https://www.atlassian.com/ru/software/jira",
        },
        {
            alt: "Figma",
            src: figma,
            link: "https://www.figma.com/",
        },
    ]
    return (
        <div
            className="grid grid-cols-1 md:text-left text-center md:grid-cols-2 w-full min-h-screen justify-center items-center snap-center relative duration-1000"
            id="skills">
            <div>
                <h2 className="font-bold md:text-5xl text-2xl mb-5">Я React Frontend Developer</h2>

                <p className="font-light md:text-3xl text-xl mb-6">Для создания современных, высокоскоростных и
                    адаптивных веб
                    приложений, я использую такие технологии как:</p>
                <div className="grid md:grid-cols-5 grid-cols-3 mt-5 items-center gap-y-7">
                    {photos.map(({src, alt, link}) =>
                        <a key={Math.random()} className="flex justify-center" rel="noopener" target="_blank"
                           href={link}>
                            <Image
                                className="md:w-20 md:h-20 w-10 h-10 "
                                src={src}
                                width={70}
                                height={70}
                                placeholder="blur"
                                alt={alt}/>
                        </a>
                    )}
                    <a className="flex justify-center" href="https://github.com/SKaterinenko"><FaGithub
                        className="md:text-7xl text-4xl"/></a>
                </div>
            </div>
            <div className="hidden md:flex justify-center">
                <a className="flex justify-center" href="https://react.dev/" rel="noopener" target="_blank">
                    <Image
                        className="object-contain"
                        src="/react.png"
                        width={400}
                        height={400}
                        alt="React"/>
                </a>
            </div>
        </div>
    )
}

export default Skills