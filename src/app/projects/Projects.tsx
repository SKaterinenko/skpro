import React, { memo, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Pagination from '@/app/components/Pagination/Pagination';
import { ProjectsData } from '@/app/projects/ProjectData';

const Projects = memo(() => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const isPhone = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1280px)' });
  let PageSize = 2;

  if (isPhone) {
    PageSize = 2;
  } else if (isTablet) {
    PageSize = 4;
  } else {
    PageSize = 6;
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (+currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const reverseProjectsData = [...ProjectsData].reverse();
    return reverseProjectsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div
      className="flex flex-col w-full min-h-screen justify-center items-center snap-center relative duration-1000"
    >
      <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-1 gap-10" id="projects">
        {currentTableData.map(({ logo, shortDescription, id }) => (
          <Link key={id} href={`/projects/${id}`}>
            <div className="cursor-pointer">
              <div className="min-w-full md:h-40 h-24 bg-grey rounded-md flex justify-center mb-9 p-2">
                <Image
                  className="object-contain"
                  priority
                  width={250}
                  height={150}
                  src={logo}
                  alt={shortDescription}
                />
              </div>
              <h2 className="font-medium md:text-3xl text-xl">{shortDescription}</h2>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        className="pagination-bar flex justify-center mt-16"
        currentPage={currentPage}
        totalCount={ProjectsData.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
});

export default Projects;
