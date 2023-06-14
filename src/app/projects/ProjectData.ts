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
    link: string
}

export const ProjectsData: ProjectType[] = [
    {
        id: "1",
        name: "FinAlley",
        shortDescription: "Торговля криптовалютой FinAlley",
        logo: "/projects/finAlley/finalley.svg",
        description: "Description Text",
        link: "https://www.finalley.net",
        stack: "NextJS, ReactJS, TypeScript, RTK Query, React Bootstrap",
        photos: [
            {id: 1, link: "/projects/finAlley/finAlley1.png"},
            {id: 2, link: "/projects/finAlley/finAlley2.png"},
            {id: 3, link: "/projects/finAlley/finAlley3.png"},
            {id: 4, link: "/projects/finAlley/finAlley4.png"},
            {id: 5, link: "/projects/finAlley/finAlley5.png"},
            {id: 6, link: "/projects/finAlley/finAlley6.png"},
            {id: 7, link: "/projects/finAlley/finAlley7.png"},
            {id: 8, link: "/projects/finAlley/finAlley8.png"},
            {id: 9, link: "/projects/finAlley/finAlley9.png"},
            {id: 10, link: "/projects/finAlley/finAlley10.png"},
            {id: 11, link: "/projects/finAlley/finAlley11.png"},
            {id: 12, link: "/projects/finAlley/finAlley12.png"},
        ]
    },
    {
        id: "2",
        name: "MATE LMS",
        shortDescription: "Учебная платформа \n" +
            "MATE LMS",
        logo: "/projects/mate/mate.svg",
        description: "Description Text",
        link: "https://mate-edu.io",
        stack: "ReactJS, TypeScript, Axios, Ant Design",
        photos: [
            {id: 1, link: "/projects/mate/mate1.png"},
            {id: 2, link: "/projects/mate/mate2.png"},
            {id: 3, link: "/projects/mate/mate3.png"},
            {id: 4, link: "/projects/mate/mate4.png"},
            {id: 5, link: "/projects/mate/mate5.png"},
            {id: 6, link: "/projects/mate/mate6.png"},
            {id: 7, link: "/projects/mate/mate7.png"},
            {id: 8, link: "/projects/mate/mate8.png"},
            {id: 9, link: "/projects/mate/mate9.png"},
            {id: 10, link: "/projects/mate/mate10.png"},
            {id: 11, link: "/projects/mate/mate11.png"},
            {id: 12, link: "/projects/mate/mate12.png"},
            {id: 13, link: "/projects/mate/mate12.png"},
            {id: 14, link: "/projects/mate/mate14.png"},
            {id: 15, link: "/projects/mate/mate15.png"},
            {id: 16, link: "/projects/mate/mate16.png"},
            {id: 17, link: "/projects/mate/mate17.png"},
        ]
    },
    {
        id: "3",
        name: "IT ACADEMY",
        shortDescription: "Учебный центр IT ACADEMY",
        logo: "/projects/itAcademy/itacademy.svg",
        description: "Description Text",
        link: "https://it-academy.uz",
        stack: "ReactJS, TypeScript, Axios, Ant Design",
        photos: [
            {id: 1, link: "/projects/itAcademy/itAcademy1.png"},
            {id: 2, link: "/projects/itAcademy/itAcademy2.png"},
            {id: 3, link: "/projects/itAcademy/itAcademy3.png"},
            {id: 4, link: "/projects/itAcademy/itAcademy4.png"},
            {id: 5, link: "/projects/itAcademy/itAcademy5.png"},
            {id: 6, link: "/projects/itAcademy/itAcademy6.png"},
            {id: 7, link: "/projects/itAcademy/itAcademy7.png"},
            {id: 8, link: "/projects/itAcademy/itAcademy8.png"},
            {id: 9, link: "/projects/itAcademy/itAcademy9.png"},
            {id: 10, link: "/projects/itAcademy/itAcademy10.png"},
            {id: 11, link: "/projects/itAcademy/itAcademy11.png"},
            {id: 12, link: "/projects/itAcademy/itAcademy12.png"},
        ]
    },
    {
        id: "4",
        name: "Kadabra",
        shortDescription: "Интернет магазин Kadabra",
        logo: "/projects/kadabra/kadabra.svg",
        description: "Description Text",
        link: "",
        stack: "ReactJS, Ant Design, Axios",
        photos: [
            {id: 1, link: "/projects/kadabra/kadabra1.png"},
            {id: 2, link: "/projects/kadabra/kadabra2.png"},
            {id: 3, link: "/projects/kadabra/kadabra3.png"},
            {id: 4, link: "/projects/kadabra/kadabra4.png"},
            {id: 5, link: "/projects/kadabra/kadabra5.png"},
            {id: 6, link: "/projects/kadabra/kadabra6.png"},
            {id: 7, link: "/projects/kadabra/kadabra7.png"},
            {id: 8, link: "/projects/kadabra/kadabra8.png"},
            {id: 9, link: "/projects/kadabra/kadabra9.png"},
        ]
    },
    {
        id: "5",
        name: "Edocs",
        shortDescription: "Электронный документооборот Edocs",
        logo: "/projects/edocs/edocs.svg",
        description: "Description Text",
        link: "https://doc.edocs.uz",
        stack: "VueJS, Vuetify",
        photos: [
            {id: 1, link: "/projects/edocs/edocs1.png"},
            {id: 2, link: "/projects/edocs/edocs2.png"},
            {id: 3, link: "/projects/edocs/edocs3.png"},
            {id: 4, link: "/projects/edocs/edocs4.png"},
            {id: 5, link: "/projects/edocs/edocs5.png"},
        ]
    },
    {
        id: "6",
        name: "Tech Yard Solutions",
        shortDescription: "Аутсорсинговая компания Tech Yard Solutions",
        logo: "/projects/techyard/techyard.svg",
        description: "Description Text",
        link: "https://techyardsolutions.com",
        stack: "test",
        photos: [
            {id: 1, link: "/projects/techyard/techyard1.png"},
            {id: 2, link: "/projects/techyard/techyard2.png"},
            {id: 3, link: "/projects/techyard/techyard3.png"},
            {id: 4, link: "/projects/techyard/techyard4.png"},
        ]
    },
    {
        id: "7",
        name: "TruckStaff Solutions",
        shortDescription: "Логистическая компания TruckStaff Solutions",
        logo: "/projects/truckstaff/truckstaff.svg",
        description: "Description Text",
        link: "https://truckstaff.us",
        stack: "ReactJS, Ant Design",
        photos: [
            {id: 1, link: "/projects/truckstaff/truckstaff1.png"},
            {id: 2, link: "/projects/truckstaff/truckstaff2.png"},
        ]
    },
    {
        id: "8",
        name: "Dolina Capital",
        shortDescription: "Портфолио компании инвесторов Dolina Capital",
        logo: "/projects/dolinacapital/dolinacapital.svg",
        description: "Description Text",
        link: "",
        stack: "ReactJS, Ant Design",
        photos: [
            {id: 1, link: "/projects/dolinacapital/dolinacapital1.png"},
            {id: 2, link: "/projects/dolinacapital/dolinacapital2.png"},
            {id: 3, link: "/projects/dolinacapital/dolinacapital3.png"},
            {id: 4, link: "/projects/dolinacapital/dolinacapital4.png"},
        ]
    },
    {
        id: "9",
        name: "Valstatex",
        shortDescription: "Консалтинговая компания Valstatex",
        logo: "/projects/valstatex/valstatex.svg",
        description: "Description Text",
        link: "https://valstatex.uz",
        stack: "ReactJS, Ant Design",
        photos: [
            {id: 1, link: "/projects/valstatex/valstatex1.png"},
            {id: 2, link: "/projects/valstatex/valstatex2.png"},
            {id: 3, link: "/projects/valstatex/valstatex3.png"},
        ]
    },
    {
        id: "10",
        name: "Lagom.software",
        shortDescription: "Аутсорсинговая компания Lagom.software",
        logo: "/projects/lagom/lagom.svg",
        description: "Description Text",
        link: "",
        stack: "ReactJS, Ant Design",
        photos: [
            {id: 1, link: "/projects/lagom/lagom1.png"},
            {id: 2, link: "/projects/lagom/lagom2.png"},
            {id: 3, link: "/projects/lagom/lagom3.png"},
            {id: 4, link: "/projects/lagom/lagom4.png"},
        ]
    },
    {
        id: "11",
        name: "Chd",
        shortDescription: "Мониторинг учебных ценнтров Chd",
        logo: "/projects/chd/chd.svg",
        description: "Description Text",
        link: "",
        stack: "ReactJS, Ant Design",
        photos: [
            {id: 1, link: "/projects/chd/chd1.png"},
            {id: 2, link: "/projects/chd/chd2.png"},
            {id: 3, link: "/projects/chd/chd3.png"},
            {id: 4, link: "/projects/chd/chd4.png"},
        ]
    },
]