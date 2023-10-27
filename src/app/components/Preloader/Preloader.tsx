import Image from 'next/image';

const Preloader = () => (
  <div className="bg-black flex h-screen justify-center items-center self-center">
    <Image src="/spinner.svg" width={200} height={200} alt="Loading" />
  </div>
);

export default Preloader;
