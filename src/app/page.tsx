"use client"
import ReactFullpage from '@fullpage/react-fullpage';
import Main from "@/app/components/Main/Main";
import {setPage} from "@/app/redux/appSlice";
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";
import {FaGithub, FaRegEnvelope, FaTelegramPlane} from "react-icons/fa";
import React from "react";
import Skills from "@/app/components/Skills/Skills";
import Projects from "@/app/components/Projects/Projects";
import Header from "@/app/components/Header/Header";


const Home = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.appReducer.page)

    return (
        <main className="mt-8 px-11">
            <Header/>
            <div className="flex">
                <div className="flex flex-col justify-center">
                    <div className="text-4xl cursor-pointer">
                        <a href="https://t.me/SKaterinenko" target="_blank"><FaTelegramPlane className="mb-8"/></a>
                        <a href="mailto: skaterinenko@gmail.com" target="_blank"><FaRegEnvelope className="mb-8"/></a>
                        <a href="https://github.com/SKaterinenko" target="_blank"><FaGithub className="mb-8"/></a>
                    </div>
                </div>
                <div
                    className="text-8xl absolute border-b-4 pb-1 border-black dark:border-white font-extrabold bottom-24">0{page}</div>
                <div className="px-36">
                    {/*// @ts-ignore*/}
                    <ReactFullpage
                        navigation
                        onLeave={(origin, destination) => {
                            dispatch(setPage(destination.index + 1))
                        }}
                        scrollingSpeed={2000}
                        render={({state, fullpageApi}) => {
                            return (
                                <ReactFullpage.Wrapper>
                                    <div className="section">
                                        <Main/>
                                    </div>
                                    <div className="section">
                                        <Skills/>
                                    </div>
                                    <div className="section">
                                        <Projects/>
                                    </div>
                                </ReactFullpage.Wrapper>
                            );
                        }}
                    />
                </div>

            </div>
        </main>
    )
}

export default Home