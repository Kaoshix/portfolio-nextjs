import Image from "next/image";
import { Button } from "./ui/button";
import { ButtonContact } from "./ui/button-contact";

export const HeroBanner = () => {
    return (
        <div className="grow flex items-center">
            <div className="w-[600px] mx-auto">
                <h1 className='text-5xl text-gray-700 font-semibold leading-[3.7rem] mb-3'>
                    <span className="pl-1">Hi, i am</span>
                    <br />
                    <span className="text-7xl font-bold">Sebastien</span>
                    <br />
                    <span className="pl-1 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">Full-stack Web Developer</span>
                </h1>

                <p className="pl-1 mb-4 text-lg font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus quam excepturi corrupti ratione laboriosam deleniti rerum laborum.</p>

                <div className="flex items-center gap-2">
                    <Button>Download my CV</Button>
                    <ButtonContact />
                </div>
            </div>
            <div className="grow hidden md:flex justify-end">
                <Image src={'/developer.svg'} width={800} height={800} alt="hero banner image" />
            </div>
        </div>
    )
}