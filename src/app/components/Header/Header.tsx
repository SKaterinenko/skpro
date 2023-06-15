"use client"
import {FaRegMoon, FaRegSun} from "react-icons/fa";
import {useEffect, useState} from "react";
import Link from "next/link";

const Header = () => {
    const [theme, setTheme] = useState(window.localStorage.getItem("theme"))

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Позволяет кнопки менять тему
    useEffect(() => {

        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

        const setDark = () => {
            document.documentElement.classList.add('dark');
            window.localStorage.setItem("theme", "dark")
            setTheme("dark")
        }

        const setLight = () => {
            document.documentElement.classList.remove('dark');
            window.localStorage.setItem("theme", "light")
            setTheme("light")
        }

        // Если клиент впервые на сайте то поставится тема которая используется в системе
        const checkTheme = () => {
            if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && darkQuery.matches)) {
                setDark()
            } else {
                setLight()
            }
        }
        switch (theme) {
            case "dark" :
                document.documentElement.classList.add('dark');
                window.localStorage.setItem("theme", "dark")
                break
            case "light":
                document.documentElement.classList.remove('dark');
                window.localStorage.setItem("theme", "light")
                break
            default:
                window.localStorage.removeItem("theme")
                checkTheme()
                break;
        }
        // Если системная тема поменялась то и сайт тоже поменяет тему
        darkQuery.addEventListener("change", e => {
            if (e.matches) {
                setDark()
            } else {
                setLight()
            }
        })
    }, [theme])


    return (
        <header
            className="absolute top-0 md:px-11 px-2 left-0 flex py-3 md:justify-between justify-center w-full z-10 items-center">
            <div className="md:text-4xl text-2xl cursor-pointer font-bold md:px-0 px-2">
                <Link href="/">
                    <h1>@SKaterinenko</h1>
                </Link>
            </div>
            <div>
                <ul className="md:flex hidden justify-between">
                    <li data-menuanchor="page1" className="px-4 text-2xl cursor-pointer font-bold self-center">
                        <a href="#skills">
                            Скиллы
                        </a>
                    </li>
                    <li data-menuanchor="page2"
                        className="px-4 text-2xl cursor-pointer font-bold self-center">
                        <a href="#projects">Портфолио</a>
                    </li>
                    <li className="px-4 text-2xl cursor-pointer font-bold self-center" onClick={() => {
                        handleThemeSwitch()
                    }}><FaRegMoon className="block dark:hidden"/>
                        <FaRegSun className="hidden dark:block"/>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header