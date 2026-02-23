import "./globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
	title: "SKaterinenko - Портфолио",
	description:
		"Я Сергей Катериненко Frontend developer и это мое портфолио где хранятся все коммерческие проекты которые я разрабатывал",
	authors: [{ name: "Sergey Katerinenko", url: "https://skpro.uz" }],
	creator: "Sergey Katerinenko",
};

const Layout = ({ children }: { children: React.ReactNode }) => (
	<html lang="ru" className="no-scrollbar" suppressHydrationWarning>
		<head>
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: `
        (function() {
          const theme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (theme === 'dark' || (!theme && prefersDark)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
				}}
			/>
		</head>
		<body>{children}</body>
	</html>
);

export default Layout;
