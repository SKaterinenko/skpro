"use client";

import React, { useEffect, useState } from "react";
import Projects from "@/app/projects/Projects";
import { Header } from "@/src/components/Header";
import { Preloader } from "@/src/components/Preloader";
import { Sidebar } from "@/src/components/Sidebar";
import { Main } from "@/src/page/Main";
import { Skills } from "@/src/page/Skills";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) return <Preloader />;

	return (
		<main className="lg:px-11 px-2">
			<Header />
			<div className="flex">
				<div className="hidden lg:flex flex-col justify-center">
					<Sidebar />
				</div>
				<div className="2xl:px-36 lg:px-14 px-5">
					<div className="container">
						<Main />
						<Skills />
						<Projects />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
