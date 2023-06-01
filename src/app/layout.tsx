import './globals.css'
import {Providers} from "@/app/redux/provider";
import React from "react";


export const metadata = {
    title: 'SKpro - Портфолио',
    description: 'Я Сергей Катериненко frontend developer и это мое портфолио',
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
