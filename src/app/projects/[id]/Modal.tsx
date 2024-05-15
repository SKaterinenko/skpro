'use client';

import { memo, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Image, { StaticImageData } from 'next/image';
import { createPortal } from 'react-dom';

type PropsType = {
  link: StaticImageData
  shortDescription: string
  id: number
};

const Modal = memo(({ id, link, shortDescription }: PropsType) => {
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

      {createPortal(<FsLightbox
        toggler={toggle}
        sources={[
          <Image
            key={id}
            alt={shortDescription}
            placeholder="blur"
            className="object-contain w-full h-full"
            style={{ transform: 'translate3d(0, 0, 0)' }}
            src={link}
            onClick={() => setToggle(!toggle)}
          />,
        ]}
      />, document.body)}
    </>
  );
});

export default Modal;
