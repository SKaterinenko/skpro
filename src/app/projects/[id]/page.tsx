import { useMemo } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header/Header';
import Preloader from '@/app/components/Preloader/Preloader';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Modal from '@/app/projects/[id]/Modal';
import { ProjectsData, ProjectType } from '@/app/projects/ProjectData';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const check = (el: ProjectType) => el.id === params.id;

  const project = ProjectsData.find(check);
  return {
    title: `Проект - ${project?.name}`,
    description: project?.shortDescription,
  };
}

const ProjectDetail = ({ params }: { params: { id: string } }) => {
  const check = (el: ProjectType) => el.id === params.id;

  const project = useMemo(() => ProjectsData.find(check), []);
  if (!project) return <Preloader />;

  const {
    shortDescription, logo, stack, link, photos, description,
  } = project;

  return (
    <main className="md:px-11 px-2 pb-5 min-h-screen">
      <Header />
      <div className="mt-20">
        <div className="flex">
          <div className="md:block hidden">
            <Sidebar />
          </div>
          <div className="xl:px-36 lg:px-10 px-5 w-full">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div>
                <h2 className="text-4xl">{shortDescription}</h2>
                <p className="mt-5 rounded text-2xl">{description}</p>
                <p className="mt-10 text-2xl">
                  {`Стек: ${stack}`}
                </p>
              </div>
              <div
                className="mt-10 lg:mt-0 flex justify-center flex-col align-center items-center text-center"
              >
                <a href={project.link} className="w-full sm:w-3/5" rel="noopener noreferrer" target="_blank">
                  <div className="w-full h-52 bg-grey p-2 rounded-2xl flex justify-center">
                    <Image
                      className="object-contain"
                      width={250}
                      height={150}
                      src={logo}
                      alt={shortDescription}
                    />
                  </div>
                  <p className="mt-5 text-2xl font-bold">{link.slice(8)}</p>
                </a>
              </div>
            </div>
            <div className="md:columns-4 columns-2 mt-14">
              {photos.map(({ id, link: modalLink }) => (
                <div
                  key={id}
                  className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                  <Modal id={id} link={modalLink} shortDescription={shortDescription} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
