import Image from 'next/image';
import {FaGithub} from "react-icons/fa";

const Skills = () => {
    const photos = [
        {
            alt: "Typescript",
            src: "/typescript.png",
            link: "https://www.typescriptlang.org/",
        },
        {
            alt: "Ant Design",
            src: "/antd.png",
            link: "https://ant.design/",
        },
        {
            alt: "Bitbucket",
            src: "/bitbucket.png",
            link: "https://bitbucket.org/",
        },
        {
            alt: "React Bootstrap",
            src: "/bootstrap.svg",
            link: "https://react-bootstrap.github.io/",
        },
        {
            alt: "i18next",
            src: "/i18next.png",
            link: "https://react.i18next.com/",
        },
        {
            alt: "Next.js",
            src: "/nextjs.png",
            link: "https://nextjs.org/",
        },
        {
            alt: "Redux Toolkit",
            src: "/redux.png",
            link: "https://redux-toolkit.js.org/",
        },
        {
            alt: "React Hook Form",
            src: "/rhf.png",
            link: "https://react-hook-form.com/",
        },
        {
            alt: "Sass",
            src: "/sass.png",
            link: "https://sass-lang.com/",
        },
        {
            alt: "Swiper",
            src: "/swiper.png",
            link: "https://swiperjs.com/",
        },
        {
            alt: "Tailwind",
            src: "/tailwind.png",
            link: "https://tailwindcss.com/",
        },
        {
            alt: "Gitlab",
            src: "/gitlab.png",
            link: "https://about.gitlab.com/",
        },
        {
            alt: "Jira",
            src: "/jira.png",
            link: "https://www.atlassian.com/ru/software/jira",
        },
        {
            alt: "Figma",
            src: "/figma.png",
            link: "https://www.figma.com/",
        },
    ]
    return (
        <div className="grid grid-cols-2">
            <div>
                <h2 className="font-bold text-5xl mb-5">Я React Frontend Developer</h2>
                <p className="font-light text-3xl mb-6">Для создания современных, высокоскоростных и адаптивных веб
                    приложений, я использую такие технологии как:</p>
                <div className="grid grid-cols-5 items-center gap-y-7">
                    {photos.map(({src, alt, link}) =>
                        <a key={Math.random()} rel="noopener" target="_blank" href={link}>
                            <Image
                                src={src}
                                width={70}
                                height={70}
                                alt={alt}/>
                        </a>
                    )}
                    <a href="https://github.com/SKaterinenko"><FaGithub className="text-7xl"/></a>
                </div>
            </div>
            <div className="flex justify-center">
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