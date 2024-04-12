import Image from "next/image";
import { Button } from "./ui/button";

export const HeroBanner = () => {
    return (
        <>
            <div className="w-[600px] mx-auto">
                <h1 className='text-5xl text-gray-700 font-semibold leading-[4rem] mb-5'>
                    Hi, i am
                    <br />
                    <span className="text-7xl font-bold">Sebastien</span>
                    <br />
                    <span className="font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Full-stack Web Developer</span>
                </h1>

                <div className="flex gap-2">
                    <Button>Download my CV</Button>
                    <Button>Hire me</Button>
                </div>
            </div>
            <div className="grow hidden md:flex justify-end">
                <Image src={'/developer.svg'} width={800} height={800} alt="hero banner image" />
            </div>
        </>
    )
}