import Image from "next/image";

const Projects = () => {
    const projects = [
        {
            logo: "/finalley.svg",
            name: "Торговля криптовалютой FinAlley"
        },
        {
            logo: "/mate.png",
            name: "Учебная платформа \n" +
                "MATE LMS"
        },
        {
            logo: "/itacademy.svg",
            name: "Учебный центр IT ACADEMY"
        },
        {
            logo: "/edocs.png",
            name: "Электронный документооборот Edocs"
        },
        {
            logo: "/truckstaff.svg",
            name: "Логистическая компания TruckStaff Solutions"
        },
        {
            logo: "/techyard.png",
            name: "Портфолио аутсорсинговой компании Tech Yard Solutions"
        },
    ]
    return (
        <div className="grid grid-cols-3 gap-10">
            {projects.map(({logo, name}) =>
                <div className="cursor-pointer" key={Math.random()}>
                    <div className="w-full h-40 bg-grey rounded-md flex justify-center mb-9">
                        <Image className="object-contain" width={250} height={150} src={logo} alt={name}/>
                    </div>
                    <h2 className="font-medium text-3xl">{name}</h2>
                </div>)}
        </div>
    )
}

export default Projects