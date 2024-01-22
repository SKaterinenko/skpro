'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Header from '@/app/components/Header/Header';
import Preloader from '@/app/components/Preloader/Preloader';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Main from '@/app/pages/Main/Main';
import Skills from '@/app/pages/Skills/Skills';
import Projects from '@/app/projects/Projects';

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
          <div className={`${styles.container}`}>
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
