import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="absolute bottom-0 bg-[#111827] w-full h-[150px] md:h-[200px] text-white">
            <div className="max-w-screen-2xl m-auto flex flex-col gap-5 justify-center items-center h-full">
                <p className="text-xl">© 2024 Sebastien Olhagaray</p>
                <div className="flex gap-5">
                    <Link href="https://www.linkedin.com/in/sebastien-olhagaray" target='_blank' aria-label="Profil Linkedin de Sébastien OLHAGARAY">
                        <FaLinkedin size={40} />
                    </Link>

                    <Link href="https://github.com/Kaoshix" target='_blank' aria-label="Profil GitHub de Sébastien OLHAGARAY">
                        <IoLogoGithub size={40} />
                    </Link>

                    <Link href="https://www.instagram.com/kaoshi_x" target='_blank' aria-label="Profil Instagram de Sébastien OLHAGARAY">
                        <IoLogoInstagram size={40} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}