import Image from "next/image";
import { Button } from "./ui/button";
import { ButtonContact } from "./ui/button-contact";

export const HeroBanner = () => {
    return (
        <div className="grow flex items-center">
            <div className="w-[600px] mx-auto text-center md:text-start">
                <h1 className='text-4xl md:text-5xl text-gray-700 font-semibold leading-[2.5rem] md:leading-[3.7rem] mb-5 md:mb-3'>
                    <span>Hi, i am</span>
                    <br />
                    <span className="text-6xl md:text-7xl font-bold">Sebastien</span>
                    <br />
                    <p className="mt-2 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Full-stack Web Developer</p>
                </h1>

                <p className="mb-5 text-2xl font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus quam excepturi corrupti ratione laboriosam deleniti rerum laborum.</p>

                <div className="flex justify-center md:justify-start gap-2">
                    <Button>Download CV</Button>
                    <ButtonContact />
                </div>
            </div>
            <div className="grow hidden md:flex justify-end">
                <Image src={'/developer.svg'} width={800} height={800} alt="hero banner image" />
            </div>
        </div>
    )
}