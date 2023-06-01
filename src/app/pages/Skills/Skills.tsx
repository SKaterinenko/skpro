import Image from 'next/image';
import {FaGithub} from "react-icons/fa";

const Skills = () => {
    const photos = [
        {
            alt: "Typescript",
            src: "/typescript.png",
        },
        {
            alt: "Antd",
            src: "/antd.png",
        },
        {
            alt: "Antd",
            src: "/bitbucket.png",
        },
        {
            alt: "Antd",
            src: "/bootstrap.png",
        },
        {
            alt: "Antd",
            src: "/i18next.png",
        },
        {
            alt: "Antd",
            src: "/nextjs.png",
        },
        {
            alt: "Antd",
            src: "/redux.png",
        },
        {
            alt: "Antd",
            src: "/rhf.png",
        },
        {
            alt: "Antd",
            src: "/sass.png",
        },
        {
            alt: "Antd",
            src: "/swiper.png",
        },
        {
            alt: "Antd",
            src: "/tailwind.png",
        },
        {
            alt: "Antd",
            src: "/gitlab.png",
        },
        {
            alt: "Antd",
            src: "/jira.png",
        },
        {
            alt: "Antd",
            src: "/figma.png",
        },
    ]
    return (
        <div className="grid grid-cols-2">
            <div>
                <h2 className="font-bold text-5xl mb-5">Я React Frontend Developer</h2>
                <p className="font-light text-3xl mb-6">Для создания современных, высокоскоростных и адаптивных веб
                    приложений, я использую такие технологии как:</p>
                <div className="grid grid-cols-5 items-center gap-y-7">
                    {photos.map(({src, alt}) =>
                        <Image
                            key={Math.random()}
                            src={src}
                            width={70}
                            height={70}
                            alt={alt}/>
                    )}
                    <FaGithub className="text-7xl"/>
                </div>
            </div>
            <div className="flex justify-center">
                <Image
                    className="object-contain"
                    src="/react.png"
                    width={400}
                    height={400}
                    alt="React"/>
            </div>
        </div>
    )
}

export default Skills