"use client"
import ReactFullpage from '@fullpage/react-fullpage';
import Main from "@/app/pages/Main/Main";

import {setPage} from "@/app/redux/appSlice";
import {useAppDispatch, useAppSelector} from "@/app/redux/hooks";
import Header from "@/app/components/Header/Header";
import styles from "@/app/layout.module.scss";
import {FaGithub, FaRegEnvelope, FaTelegramPlane} from "react-icons/fa";
import React from "react";


const Home = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.appReducer.page)
    return (

        <main className={styles.layout}>
            <Header/>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    <div className={styles.links}>
                        <a href="https://t.me/SKaterinenko" target="_blank"><FaTelegramPlane/></a>
                        <a href="mailto: skaterinenko@gmail.com" target="_blank"><FaRegEnvelope/></a>
                        <a href="https://github.com/SKaterinenko" target="_blank"><FaGithub/></a>
                    </div>
                </div>
                <div className={styles.counter}><span>0{page}</span></div>
                {/*// @ts-ignore*/}
                <ReactFullpage
                    navigation
                    onLeave={(origin, destination) => {
                        dispatch(setPage(destination.index + 1))
                    }}
                    scrollingSpeed={2000} /* Options here */
                    render={({state, fullpageApi}) => {
                        console.log(state)
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <Main/>
                                </div>
                                <div className="section">
                                    <p className="text-cyan-500 dark:text-amber-700">Section 2</p>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        </main>
    )
}

export default Home