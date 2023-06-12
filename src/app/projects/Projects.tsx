import Image from "next/image";
import {ProjectsData} from "@/app/projects/ProjectData";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const Projects = () => {

    return (
        <div className="grid grid-cols-3 gap-10">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {ProjectsData.map(({logo, shortDescription, id}) =>
                    <SwiperSlide key={id}>
                        <Link href={`/projects/${id}`}>
                            <div className="cursor-pointer">
                                <div className="w-full h-40 bg-grey rounded-md flex justify-center mb-9">
                                    <Image className="object-contain" width={250} height={150} src={logo}
                                           alt={shortDescription}/>
                                </div>
                                <h2 className="font-medium text-3xl">{shortDescription}</h2>
                            </div>
                        </Link>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Projects