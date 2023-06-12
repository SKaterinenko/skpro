"use client"
import ReactFullpage from '@fullpage/react-fullpage';
import Main from "@/app/pages/Main/Main";
import {setPage} from "@/app/redux/appSlice";
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";
import React from "react";
import Skills from "@/app/pages/Skills/Skills";
import Projects from "@/app/projects/Projects";
import Header from "@/app/components/Header/Header";
import Sidebar from "@/app/components/Sidebar/Sidebar";


const Home = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.appReducer.page)

    return (
        <main className="mt-8 px-11">
            <Header/>
            <div className="flex">
                <Sidebar/>
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