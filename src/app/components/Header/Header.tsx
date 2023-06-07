"use client"
import {FaRegMoon, FaRegSun} from "react-icons/fa";
import {useEffect, useState} from "react";

const Header = () => {
    const [theme, setTheme] = useState(localStorage.theme)
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const setDark = () => {
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme", "dark")
        setTheme("dark")
    }

    const setLight = () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light")
        setTheme("light")
    }

    // Если клиент впервые на сайте то поставится тема которая используется в системе
    const checkTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
            setDark()
        } else {
            setLight()
        }
    }

    // Позволяет кнопки менять тему
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
                checkTheme()
                break;
        }

    }, [theme])

    // Если системная тема поменялась то и сайт тоже поменяет тему
    darkQuery.addEventListener("change", e => {
        if (e.matches) {
            setDark()
        } else {
            setLight()
        }
    })
    return (
        <header className="flex justify-between w-full relative z-10 items-center">
            <div className="text-4xl cursor-pointer font-bold">
                <h1>@SKaterinenko</h1>
            </div>
            <div>
                <ul className="flex justify-between">
                    <li className="px-4 text-2xl cursor-pointer font-bold self-center">Скиллы</li>
                    <li className="px-4 text-2xl cursor-pointer font-bold self-center">Портфолио</li>
                    <li className="px-4 text-2xl cursor-pointer font-bold self-center">Контакты</li>
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