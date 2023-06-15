"use client"
import Main from "@/app/pages/Main/Main";
import React, {useEffect, useRef, useState} from "react";
import Header from "@/app/components/Header/Header";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import styles from './page.module.scss'
import Skills from "@/app/pages/Skills/Skills";
import Projects from "@/app/projects/Projects";
import Preloader from "@/app/components/Preloader/Preloader";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    const section1 = useRef<any>();
    const section2 = useRef<any>();
    const section3 = useRef<any>();

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (isLoading) return <Preloader/>

    return (
        <main className="md:px-11 px-2">
            <Header/>
            <div className="flex">
                <div className="hidden md:flex flex-col justify-center">
                    <Sidebar/>
                </div>
                <div className="md:px-36 px-5">
                    <div className={`container ${styles.container}`}>
                        <div ref={section1}>
                            <Main/>
                        </div>
                        <div ref={section2}>
                            <Skills/>
                        </div>
                        <div ref={section3}>
                            <Projects/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home