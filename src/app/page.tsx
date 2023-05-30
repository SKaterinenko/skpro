"use client"
import ReactFullpage from '@fullpage/react-fullpage';
import Main from "@/app/pages/Main/Main";
import {useEffect, useState} from "react";

const Home = () => {
    const [theme, setTheme] = useState(localStorage.theme)
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        switch (theme) {
            case "dark" :
                document.documentElement.classList.add('dark');
                localStorage.setItem("theme", "dark")
                break
            case "light":
                document.documentElement.classList.remove('dark');
                localStorage.setItem("theme", "light")
                break
            default:
                localStorage.removeItem("theme")
                break;
        }

    }, [theme])


    darkQuery.addEventListener("change", e => {
        if (e.matches) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light")
            setTheme("light")
        }
    })

    return (
        // @ts-ignore
        <ReactFullpage
            navigation
            scrollingSpeed={1000} /* Options here */
            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Main/>
                            <button type="button" onClick={() => {
                                handleThemeSwitch()
                            }}>TOGGLE
                            </button>
                        </div>
                        <div className="section">
                            <p className="text-cyan-500 dark:text-amber-700">Section 2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    )
}

export default Home