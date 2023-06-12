import Image from "next/image";
import {ProjectsData} from "@/app/projects/ProjectData";
import Link from "next/link";
import React, {useMemo, useState} from 'react';
import Pagination from "@/app/components/Pagination/Pagination";

let PageSize = 6;

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return ProjectsData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <div className="grid grid-cols-3 gap-10">
                {currentTableData.map(({logo, shortDescription, id}) =>
                    <Link key={id} href={`/projects/${id}`}>
                        <div className="cursor-pointer">
                            <div className="w-full h-40 bg-grey rounded-md flex justify-center mb-9">
                                <Image className="object-contain" width={250} height={150} src={logo}
                                       alt={shortDescription}/>
                            </div>
                            <h2 className="font-medium text-3xl">{shortDescription}</h2>
                        </div>
                    </Link>)}

            </div>
            <Pagination
                className="pagination-bar flex justify-center mt-16"
                currentPage={currentPage}
                totalCount={ProjectsData.length}
                pageSize={PageSize}
                onPageChange={(page:number) => setCurrentPage(page)}
            />
        </>

    )
}

export default Projects