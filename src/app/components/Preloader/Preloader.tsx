import Image from "next/image";


const Preloader = () => {
    return (
        <div className="bg-black flex h-screen justify-center items-center self-center">
            <Image src="/spinner.svg" width={400} height={400} alt="Loading"/>
        </div>
    )
}

export default Preloader