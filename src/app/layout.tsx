import './globals.css';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SKaterinenko - Портфолио',
  description: 'Я Сергей Катериненко Frontend developer и это мое портфолио где хранятся все коммерческие проекты которые я разрабатывал',
  authors: [{ name: 'Sergey Katerinenko', url: 'https://skpro.uz' }],
  creator: 'Sergey Katerinenko',
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru" className="no-scrollbar">
    <body>
      {children}
    </body>
  </html>
);

export default Layout;
