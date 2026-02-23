"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";

export const Header = () => {
	const [theme, setTheme] = useState<"dark" | "light">(() => {
		if (typeof window === "undefined") return "dark"; // SSR
		const saved = localStorage.getItem("theme");
		if (saved === "dark" || saved === "light") return saved;
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<header className="absolute top-0 md:px-11 px-2 left-0 flex py-3 justify-between w-full z-10 items-center">
			<div className="md:text-4xl text-2xl cursor-pointer font-bold md:px-0 px-2">
				<Link href="/">
					<h1>@SKaterinenko</h1>
				</Link>
			</div>
			<div>
				<ul className="flex">
					<li
						data-menuanchor="page1"
						className="md:block hidden px-4 text-2xl cursor-pointer font-bold self-center"
					>
						<a href="/#skills">Скиллы</a>
					</li>
					<li
						data-menuanchor="page2"
						className="md:block hidden px-4 text-2xl cursor-pointer font-bold self-center"
					>
						<a href="/#projects">Портфолио</a>
					</li>
					<button
						type="button"
						className="px-4 text-2xl cursor-pointer font-bold self-center outline-none"
						onClick={handleThemeSwitch}
					>
						<FaRegMoon className="block dark:hidden" />
						<ImSun className="hidden dark:block" />
					</button>
				</ul>
			</div>
		</header>
	);
};
