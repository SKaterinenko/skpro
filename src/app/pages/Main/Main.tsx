import Image from 'next/image';

const Main = () => (
  <div
    className="flex gap-20 w-full min-h-screen  items-center snap-center relative duration-1000"
    id="page1"
  >
    <div className="transition-all hidden md:block">
      <Image
        src="/SergeyKaterinenko.png"
        width={800}
        height={800}
        alt="Sergey Katerinenko"
      />
    </div>
    <div className="md:text-left text-center w-full">
      <h2 className="3xl:text-4xl xl:text-4xl lg:text-3xl text-4xl font-light">Привет, я</h2>
      <h1 className="3xl:text-8xl xl:text-7xl lg:text-6xl text-6xl font-bold">Сергей</h1>
      <h2 className="3xl:text-9xl xl:text-8xl lg:text-7xl text-6xl font-semibold">Frontend</h2>
      <h2 className="3xl:text-9xl xl:text-8xl lg:text-7xl text-6xl font-thin md:tracking-widest">Developer</h2>
    </div>
  </div>
);

export default Main;
