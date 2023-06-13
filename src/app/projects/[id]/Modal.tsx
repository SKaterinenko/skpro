"use client"
import {useState} from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

type PropsType = {
    link: string
    shortDescription: string
}
const Modal = ({link, shortDescription}: PropsType) => {
    const [toggle, setToggle] = useState(false);

    return (<>
            <Image
                alt={shortDescription}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{transform: 'translate3d(0, 0, 0)'}}
                src={link}
                onClick={() => setToggle(!toggle)}
                width={400}
                height={160}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />

            <FsLightbox
                toggler={toggle}
                sources={[
                    link,
                ]}
            />
        </>
    )
}

export default Modal