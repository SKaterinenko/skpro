"use client"
import {ProjectsData, ProjectType} from "@/app/projects/ProjectData";
import Image from "next/image";
import Layout from "@/app/projects/[id]/layout";
import Header from "@/app/components/Header/Header";
import {useRef, useState} from "react";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Modal from "@/app/projects/[id]/Modal";

export async function generateMetadata({params}: { params: { id: string } }) {
    const check = (el: ProjectType) => {
        return el.id === params.id
    }

    const project = ProjectsData.find(check)
    return {
        title: `Проект - ${project?.name}`,
        description: project?.shortDescription
    }
}

const ProjectDetail = ({params}: { params: { id: string } }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)
    const check = (el: ProjectType) => {
        return el.id === params.id
    }

    const project = ProjectsData.find(check)

    if (!project) return <div>Loading...</div>

    return (
        <Layout>
            <main className="mt-8 px-11 pb-5 min-h-screen">
                <Header/>
                <div className=" mt-20">
                    <div className="flex">
                        <Sidebar/>
                        <div className="px-36 w-full">
                            <div className="grid grid-cols-2">
                                <div>
                                    <h2 className="text-4xl">{project.shortDescription}</h2>
                                    <p className="mt-5 rounded text-2xl">It is a long established fact that a reader will be
                                        distracted
                                        by the readable content of
                                        a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                        a
                                        more-or-less normal distribution of letters, as opposed to using Content </p>
                                    <p className="mt-10 text-2xl">Стек: {project.stack}</p>
                                </div>
                                <div className="flex justify-center flex-col align-center items-center text-center">
                                    <a href={project.link} rel="noopener" target="_blank">
                                        <div className="w-96 h-52 bg-grey rounded-2xl flex justify-center">
                                            <Image className="object-contain" width={250} height={150}
                                                   src={project.logo}
                                                   alt={project.shortDescription}/>
                                        </div>
                                        <p className="mt-5 text-2xl font-bold">{project.link.slice(8)}</p>
                                    </a>
                                </div>
                            </div>
                            <div className="columns-4 mt-14">
                                {project.photos.map(({id, link}) => (
                                    <div key={id}
                                         className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
                                        <Modal link={link}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ProjectDetail
