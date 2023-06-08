export type ProjectType = {
    id: string,
    name: string,
    shortDescription: string,
    logo: string,
    description: string,
    link: string,
}

export const ProjectsData: ProjectType[] = [
    {
        id: "1",
        name: "FinAlley",
        shortDescription: "Торговля криптовалютой FinAlley",
        logo: "/finalley.svg",
        description: "Description Text",
        link: "https://www.finalley.net"
    },
    {
        id: "2",
        name: "MATE LMS",
        shortDescription: "Учебная платформа \n" +
            "MATE LMS",
        logo: "/mate.png",
        description: "Description Text",
        link: "https://mate-edu.io"
    },
    {
        id: "3",
        name: "IT ACADEMY",
        shortDescription: "Учебный центр IT ACADEMY",
        logo: "/itacademy.svg",
        description: "Description Text",
        link: "https://it-academy.uz"
    },
    {
        id: "4",
        name: "Edocs",
        shortDescription: "Электронный документооборот Edocs",
        logo: "/edocs.png",
        description: "Description Text",
        link: "https://doc.edocs.uz"
    },
    {
        id: "5",
        name: "TruckStaff Solutions",
        shortDescription: "Логистическая компания TruckStaff Solutions",
        logo: "/truckstaff.svg",
        description: "Description Text",
        link: "https://truckstaff.us"
    },
    {
        id: "6",
        name: "Tech Yard Solutions",
        shortDescription: "Портфолио аутсорсинговой компании Tech Yard Solutions",
        logo: "/techyard.png",
        description: "Description Text",
        link: "https://techyardsolutions.com/"
    }
]