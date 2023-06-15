import finAlley1 from "../../../public/projects/finAlley/finAlley1.png"
import finAlley2 from "../../../public/projects/finAlley/finAlley2.png"
import finAlley3 from "../../../public/projects/finAlley/finAlley3.png"
import finAlley4 from "../../../public/projects/finAlley/finAlley4.png"
import finAlley5 from "../../../public/projects/finAlley/finAlley5.png"
import finAlley6 from "../../../public/projects/finAlley/finAlley6.png"
import finAlley7 from "../../../public/projects/finAlley/finAlley7.png"
import finAlley8 from "../../../public/projects/finAlley/finAlley8.png"
import finAlley9 from "../../../public/projects/finAlley/finAlley9.png"
import finAlley10 from "../../../public/projects/finAlley/finAlley10.png"
import finAlley11 from "../../../public/projects/finAlley/finAlley11.png"
import finAlley12 from "../../../public/projects/finAlley/finAlley12.png"

import mate1 from "../../../public/projects/mate/mate1.png"
import mate2 from "../../../public/projects/mate/mate2.png"
import mate3 from "../../../public/projects/mate/mate3.png"
import mate4 from "../../../public/projects/mate/mate4.png"
import mate5 from "../../../public/projects/mate/mate5.png"
import mate6 from "../../../public/projects/mate/mate6.png"
import mate7 from "../../../public/projects/mate/mate7.png"
import mate8 from "../../../public/projects/mate/mate8.png"
import mate9 from "../../../public/projects/mate/mate9.png"
import mate10 from "../../../public/projects/mate/mate10.png"
import mate11 from "../../../public/projects/mate/mate11.png"
import mate12 from "../../../public/projects/mate/mate12.png"
import mate13 from "../../../public/projects/mate/mate13.png"
import mate14 from "../../../public/projects/mate/mate14.png"
import mate15 from "../../../public/projects/mate/mate15.png"
import mate16 from "../../../public/projects/mate/mate16.png"
import mate17 from "../../../public/projects/mate/mate17.png"

import itAcademy1 from "../../../public/projects/itAcademy/itAcademy1.png"
import itAcademy2 from "../../../public/projects/itAcademy/itAcademy2.png"
import itAcademy3 from "../../../public/projects/itAcademy/itAcademy3.png"
import itAcademy4 from "../../../public/projects/itAcademy/itAcademy4.png"
import itAcademy5 from "../../../public/projects/itAcademy/itAcademy5.png"
import itAcademy6 from "../../../public/projects/itAcademy/itAcademy6.png"
import itAcademy7 from "../../../public/projects/itAcademy/itAcademy7.png"
import itAcademy8 from "../../../public/projects/itAcademy/itAcademy8.png"
import itAcademy9 from "../../../public/projects/itAcademy/itAcademy9.png"
import itAcademy10 from "../../../public/projects/itAcademy/itAcademy10.png"
import itAcademy11 from "../../../public/projects/itAcademy/itAcademy11.png"
import itAcademy12 from "../../../public/projects/itAcademy/itAcademy12.png"

import kadabra1 from "../../../public/projects/kadabra/kadabra1.png"
import kadabra2 from "../../../public/projects/kadabra/kadabra2.png"
import kadabra3 from "../../../public/projects/kadabra/kadabra3.png"
import kadabra4 from "../../../public/projects/kadabra/kadabra4.png"
import kadabra5 from "../../../public/projects/kadabra/kadabra5.png"
import kadabra6 from "../../../public/projects/kadabra/kadabra6.png"
import kadabra7 from "../../../public/projects/kadabra/kadabra7.png"
import kadabra8 from "../../../public/projects/kadabra/kadabra8.png"
import kadabra9 from "../../../public/projects/kadabra/kadabra9.png"

import edocs1 from "../../../public/projects/edocs/edocs1.png"
import edocs2 from "../../../public/projects/edocs/edocs2.png"
import edocs3 from "../../../public/projects/edocs/edocs3.png"
import edocs4 from "../../../public/projects/edocs/edocs4.png"
import edocs5 from "../../../public/projects/edocs/edocs5.png"

import techyard1 from "../../../public/projects/techyard/techyard1.png"
import techyard2 from "../../../public/projects/techyard/techyard2.png"
import techyard3 from "../../../public/projects/techyard/techyard3.png"
import techyard4 from "../../../public/projects/techyard/techyard4.png"

import truckstaff1 from "../../../public/projects/truckstaff/truckstaff1.png"
import truckstaff2 from "../../../public/projects/truckstaff/truckstaff2.png"

import dolinacapital1 from "../../../public/projects/dolinacapital/dolinacapital1.png"
import dolinacapital2 from "../../../public/projects/dolinacapital/dolinacapital2.png"
import dolinacapital3 from "../../../public/projects/dolinacapital/dolinacapital3.png"
import dolinacapital4 from "../../../public/projects/dolinacapital/dolinacapital4.png"

import valstatex1 from "../../../public/projects/valstatex/valstatex1.png"
import valstatex2 from "../../../public/projects/valstatex/valstatex2.png"
import valstatex3 from "../../../public/projects/valstatex/valstatex3.png"

import lagom1 from "../../../public/projects/lagom/lagom1.png"
import lagom2 from "../../../public/projects/lagom/lagom2.png"
import lagom3 from "../../../public/projects/lagom/lagom3.png"
import lagom4 from "../../../public/projects/lagom/lagom4.png"

import chd1 from "../../../public/projects/chd/chd1.png"
import chd2 from "../../../public/projects/chd/chd2.png"
import chd3 from "../../../public/projects/chd/chd3.png"
import chd4 from "../../../public/projects/chd/chd4.png"


import {StaticImageData} from "next/image";

export type ProjectType = {
    id: string
    name: string
    shortDescription: string
    logo: string
    description: string
    link: string
    stack: string
    photos: PhotosType[]
}

type PhotosType = {
    id: number
    link: StaticImageData
}

export const ProjectsData: ProjectType[] = [
    {
        id: "1",
        name: "FinAlley",
        shortDescription: "Торговля криптовалютой FinAlley",
        logo: "/projects/finAlley/finalley.svg",
        description: "FinAlley - платформа для торговли криптовалютой. Разрабатывал новый функционал, улучшал старый. Также с командой переписывали проекты на TypeScript. Улучшали свою UI библиотеку. В перспективах было закончить разработку по движку / услуге который позволял бы для клиентов максимально быстро создавать платформы по торговле криптовалютой.",
        link: "https://www.finalley.net",
        stack: "NextJS, ReactJS, TypeScript, RTK Query, React Bootstrap, Tolgee",
        photos: [
            {id: 1, link: finAlley1},
            {id: 2, link: finAlley2},
            {id: 3, link: finAlley3},
            {id: 4, link: finAlley4},
            {id: 5, link: finAlley5},
            {id: 6, link: finAlley6},
            {id: 7, link: finAlley7},
            {id: 8, link: finAlley8},
            {id: 9, link: finAlley9},
            {id: 10, link: finAlley10},
            {id: 11, link: finAlley11},
            {id: 12, link: finAlley12},
        ]
    },
    {
        id: "2",
        name: "MATE LMS",
        shortDescription: "Учебная платформа \n" +
            "MATE LMS",
        logo: "/projects/mate/mate.svg",
        description: "Разрабатывал с нуля удаленную учебную систему (LMS) - MATE Education. Платформа позволяла создавать теорию, тесты и лабораторные работы, а также ввести подробную статистику по каждому студенту, по каждой пройденной им курса/урока/теории/теста/лабораторной вплоть до глав и вопросов. Платформа позволяла студентам получать качественное и актуальное образование, а администраторам контролировать и улучшать учебные курсы.",
        link: "https://mate-edu.io",
        stack: "ReactJS, TypeScript, Axios, Ant Design, i18next",
        photos: [
            {id: 1, link: mate1},
            {id: 2, link: mate2},
            {id: 3, link: mate3},
            {id: 4, link: mate4},
            {id: 5, link: mate5},
            {id: 6, link: mate6},
            {id: 7, link: mate7},
            {id: 8, link: mate8},
            {id: 9, link: mate9},
            {id: 10, link: mate10},
            {id: 11, link: mate11},
            {id: 12, link: mate12},
            {id: 13, link: mate13},
            {id: 14, link: mate14},
            {id: 15, link: mate15},
            {id: 16, link: mate16},
            {id: 17, link: mate17},
        ]
    },
    {
        id: "3",
        name: "IT ACADEMY",
        shortDescription: "Учебный центр IT ACADEMY",
        logo: "/projects/itAcademy/itacademy.svg",
        description: "Сайт для IT ACADEMY, где пользователи могли видеть информацию о курсах, почитать блог и познакомиться с историей академии.",
        link: "https://it-academy.uz",
        stack: "ReactJS, TypeScript, Axios, Ant Design, i18next",
        photos: [
            {id: 1, link: itAcademy1},
            {id: 2, link: itAcademy2},
            {id: 3, link: itAcademy3},
            {id: 4, link: itAcademy4},
            {id: 5, link: itAcademy5},
            {id: 6, link: itAcademy6},
            {id: 7, link: itAcademy7},
            {id: 8, link: itAcademy8},
            {id: 9, link: itAcademy9},
            {id: 10, link: itAcademy10},
            {id: 11, link: itAcademy11},
            {id: 12, link: itAcademy12},
        ]
    },
    {
        id: "4",
        name: "Kadabra",
        shortDescription: "Интернет магазин Kadabra",
        logo: "/projects/kadabra/kadabra.svg",
        description: "Это интернет магазин, где пользователи могли покупать товары или создовать свои магазины и продавать свои товары.",
        link: "",
        stack: "ReactJS, Ant Design, Axios, i18next",
        photos: [
            {id: 1, link: kadabra1},
            {id: 2, link: kadabra2},
            {id: 3, link: kadabra3},
            {id: 4, link: kadabra4},
            {id: 5, link: kadabra5},
            {id: 6, link: kadabra6},
            {id: 7, link: kadabra7},
            {id: 8, link: kadabra8},
            {id: 9, link: kadabra9},
        ]
    },
    {
        id: "5",
        name: "Edocs",
        shortDescription: "Электронный документооборот Edocs",
        logo: "/projects/edocs/edocs.svg",
        description: "Сайт с кабинетом для электронного документооборота в Узбекистане. Я улучшал дизайн, адаптивность и UI проекта.",
        link: "https://doc.edocs.uz",
        stack: "VueJS, Vuetify",
        photos: [
            {id: 1, link: edocs1},
            {id: 2, link: edocs2},
            {id: 3, link: edocs3},
            {id: 4, link: edocs4},
            {id: 5, link: edocs5},
        ]
    },
    {
        id: "6",
        name: "Tech Yard Solutions",
        shortDescription: "Аутсорсинговая компания Tech Yard Solutions",
        logo: "/projects/techyard/techyard.svg",
        description: "Сайт аутсорсинговой компании на котором можно было ознакомиться с их услугами. Написан на HTML для улучшения SEO",
        link: "https://techyardsolutions.com",
        stack: "HTML, CSS",
        photos: [
            {id: 1, link: techyard1},
            {id: 2, link: techyard2},
            {id: 3, link: techyard3},
            {id: 4, link: techyard4},
        ]
    },
    {
        id: "7",
        name: "TruckStaff Solutions",
        shortDescription: "Логистическая компания TruckStaff Solutions",
        logo: "/projects/truckstaff/truckstaff.svg",
        description: "Лендинг для американской логистической компании",
        link: "https://truckstaff.us",
        stack: "ReactJS, Ant Design, i18next",
        photos: [
            {id: 1, link: truckstaff1},
            {id: 2, link: truckstaff2},
        ]
    },
    {
        id: "8",
        name: "Dolina Capital",
        shortDescription: "Портфолио компании инвесторов Dolina Capital",
        logo: "/projects/dolinacapital/dolinacapital.svg",
        description: "Портфолио инвесторов где можно посмотреть их улсуги и их проекты.",
        link: "",
        stack: "ReactJS, Ant Design",
        photos: [
            {id: 1, link: dolinacapital1},
            {id: 2, link: dolinacapital2},
            {id: 3, link: dolinacapital3},
            {id: 4, link: dolinacapital4},
        ]
    },
    {
        id: "9",
        name: "Valstatex",
        shortDescription: "Консалтинговая компания Valstatex",
        logo: "/projects/valstatex/valstatex.svg",
        description: "На сайте история и услуги консалтинговой компании Valstatex.",
        link: "https://valstatex.uz",
        stack: "ReactJS, Ant Design, i18next",
        photos: [
            {id: 1, link: valstatex1},
            {id: 2, link: valstatex2},
            {id: 3, link: valstatex3},
        ]
    },
    {
        id: "10",
        name: "Lagom.software",
        shortDescription: "Аутсорсинговая компания Lagom.software",
        logo: "/projects/lagom/lagom.svg",
        description: "Сайт портфолио с услугами аутсорсинговой компании.",
        link: "",
        stack: "ReactJS, Ant Design, i18next",
        photos: [
            {id: 1, link: lagom1},
            {id: 2, link: lagom2},
            {id: 3, link: lagom3},
            {id: 4, link: lagom4},
        ]
    },
    {
        id: "11",
        name: "Chd",
        shortDescription: "Мониторинг учебных центров Chd",
        logo: "/projects/chd/chd.svg",
        description: "Сайт где находится информация о всех учебных центрах города с описанием, ценами и отзывами.",
        link: "",
        stack: "ReactJS, Ant Design, i18next",
        photos: [
            {id: 1, link: chd1},
            {id: 2, link: chd2},
            {id: 3, link: chd3},
            {id: 4, link: chd4},
        ]
    },
]