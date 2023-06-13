import Image from 'next/image';
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const headlineRef = useRef<any>();
    const sectionRef = useRef<any>();

    return (
        <div className="flex gap-20 w-full min-h-screen justify-center items-center snap-center relative duration-1000"
             id="page1" ref={sectionRef}>
            <div className="transition-all hidden md:block">
                <Image
                    src="/SK.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                /></div>
            <div>
                <h2 className="md:text-4xl text-5xl  font-light">Привет, я</h2>
                <h1 className="md:text-8xl text-6xl font-bold">Сергей</h1>
                <h2 className="md:text-9xl text-6xl font-semibold">Frontend</h2>
                <h2 className="md:text-9xl text-6xl font-thin md:tracking-widest">Developer</h2>
            </div>
        </div>
    )
}

export default Main