import Image from 'next/image';

const Page = () => {
    return (
        <div className="flex gap-20 w-full">
            <div>
                <Image
                src="/SK.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            /></div>
            <div>
                <h2 className="text-4xl font-light">Привет, я</h2>
                <h1 className="text-8xl font-bold">Сергей</h1>
                <h2 className="text-9xl font-semibold">Frontend</h2>
                <h2 className="text-9xl font-thin tracking-widest">Developer</h2>
            </div>
        </div>
    )
}

export default Page