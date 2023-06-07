import './globals.css'
import {Providers} from "@/app/redux/provider";
import React from "react";


export const metadata = {
    title: 'SKaterinenko - Портфолио',
    description: 'Я Сергей Катериненко Frontend developer и это мое портфолио где хранятся все коммерческие проекты которые я разрабатывал',
}

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="en">
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}

export default Layout
