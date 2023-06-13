import Image from "next/image";
import {ProjectsData} from "@/app/projects/ProjectData";
import Link from "next/link";
import React, {useMemo, useState} from 'react';
import Pagination from "@/app/components/Pagination/Pagination";
import {useMediaQuery} from "react-responsive";


const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const isTablet = useMediaQuery({query: '(max-width: 768px)'})
    const PageSize = isTablet ? 2 : 6;
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return ProjectsData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div
            className="flex flex-col w-full min-h-screen justify-center items-center snap-center relative duration-1000">
            <div className="md:grid-cols-3 grid grid-cols-1 gap-10" id="projects">
                {currentTableData.map(({logo, shortDescription, id}) =>
                    <Link key={id} href={`/projects/${id}`}>
                        <div className="cursor-pointer">
                            <div className="min-w-full md:h-40 h-24 bg-grey rounded-md flex justify-center mb-9">
                                <Image className="object-contain" width={250} height={150} src={logo}
                                       alt={shortDescription}/>
                            </div>
                            <h2 className="font-medium md:text-3xl text-xl">{shortDescription}</h2>
                        </div>
                    </Link>)}

            </div>
            <Pagination
                className="pagination-bar flex justify-center mt-16"
                currentPage={currentPage}
                totalCount={ProjectsData.length}
                pageSize={PageSize}
                onPageChange={(page: number) => setCurrentPage(page)}
            />
        </div>

    )
}

export default Projects