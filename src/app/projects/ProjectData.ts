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
        logo: "/finalley.svg",
        description: "Description Text",
        link: "https://www.finalley.net",
        stack: "NextJS, ReactJS, TypeScript, RTK Query, React Bootstrap",
        photos: [{id: 1, link: "/projects/finAlley1.png"}, {id: 2, link: "/projects/finAlley2.png"}, {
            id: 3,
            link: "/projects/finAlley3.png"
        },{id: 2, link: "/projects/finAlley2.png"},{id: 1, link: "/projects/finAlley3.png"},{id: 3, link: "/projects/finAlley1.png"},{id: 2, link: "/projects/finAlley2.png"},{id: 3, link: "/projects/finAlley1.png"},{id: 1, link: "/projects/finAlley2.png"},{id: 2, link: "/projects/finAlley1.png"},{id: 2, link: "/projects/finAlley1.png"},]
    },
    {
        id: "2",
        name: "MATE LMS",
        shortDescription: "Учебная платформа \n" +
            "MATE LMS",
        logo: "/mate.png",
        description: "Description Text",
        link: "https://mate-edu.io",
        stack: "ReactJS, TypeScript, Axios, Ant Design",
        photos: [{id: 1, link: "/projects/finAlley1.png"}, {id: 2, link: "/projects/finAlley1.png"}, {
            id: 3,
            link: "/projects/finAlley1.png"
        }]
    },
    {
        id: "3",
        name: "IT ACADEMY",
        shortDescription: "Учебный центр IT ACADEMY",
        logo: "/itacademy.svg",
        description: "Description Text",
        link: "https://it-academy.uz",
        stack: "ReactJS, TypeScript, Axios, Ant Design",
        photos: [{id: 1, link: "/projects/finAlley1.png"}, {id: 2, link: "/projects/finAlley1.png"}, {
            id: 3,
            link: "/projects/finAlley1.png"
        }]
    },
    {
        id: "4",
        name: "Kadabra",
        shortDescription: "Интернет магазин Kadabra",
        logo: "/kadabra.svg",
        description: "Description Text",
        link: "",
        stack: "ReactJS, Ant Design, Axios",
        photos: [{id: 1, link: "/projects/finAlley1.png"}, {id: 2, link: "/projects/finAlley1.png"}, {
            id: 3,
            link: "/projects/finAlley1.png"
        }]
    },
    {
        id: "5",
        name: "TruckStaff Solutions",
        shortDescription: "Логистическая компания TruckStaff Solutions",
        logo: "/truckstaff.svg",
        description: "Description Text",
        link: "https://truckstaff.us",
        stack: "ReactJS, Ant Design",
        photos: [{id: 1, link: "/projects/finAlley1.png"}, {id: 2, link: "/projects/finAlley1.png"}, {
            id: 3,
            link: "/projects/finAlley1.png"
        }]
    },
    {
        id: "6",
        name: "Tech Yard Solutions",
        shortDescription: "Портфолио аутсорсинговой компании Tech Yard Solutions",
        logo: "/techyard.png",
        description: "Description Text",
        link: "https://techyardsolutions.com/",
        stack: "test",
        photos: [{id: 1, link: "/projects/finAlley1.png"}, {id: 2, link: "/projects/finAlley1.png"}, {
            id: 3,
            link: "/projects/finAlley1.png"
        }]
    },
    {
        id: "7",
        name: "Edocs",
        shortDescription: "Электронный документооборот Edocs",
        logo: "/edocs.png",
        description: "Description Text",
        link: "https://doc.edocs.uz",
        stack: "VueJS, Vuetify",
        photos: [{id: 1, link: "/projects/finAlley1.png"}, {id: 2, link: "/projects/finAlley1.png"}, {
            id: 3,
            link: "/projects/finAlley1.png"
        }]
    },
]