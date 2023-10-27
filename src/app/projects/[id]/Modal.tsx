'use client';

import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Image, { StaticImageData } from 'next/image';

type PropsType = {
  link: StaticImageData
  shortDescription: string
};
const Modal = ({ link, shortDescription }: PropsType) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Image
        alt={shortDescription}
        placeholder="blur"
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: 'translate3d(0, 0, 0)' }}
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
          <Image
            key={Math.random()}
            alt={shortDescription}
            placeholder="blur"
            className="object-contain w-full h-full"
            style={{ transform: 'translate3d(0, 0, 0)' }}
            src={link}
            onClick={() => setToggle(!toggle)}
            fill
          />,
        ]}
      />
    </>
  );
};

export default Modal;
