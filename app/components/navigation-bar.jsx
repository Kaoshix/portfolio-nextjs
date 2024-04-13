
'use client';
import { useState } from "react";
import { MainLogo } from "./main-logo"
import { ButtonContact } from "./ui/button-contact"
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export const NavigationBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "projects",
        },
        {
            id: 3,
            link: "contact",
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-grey-900 mx-auto">
            <div>
                <h1 className="text-2xl">
                    <a
                        className="link-underline link-underline-black"
                        href="/"
                    >
                        <MainLogo />
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex gap-5">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links cursor-pointer capitalize font-medium text-gray-900 hover:scale-105 hover:text-blue-500 duration-200 link-underline"
                    >
                        <Link href={`#${link}`}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-50 text-gray-900 md:hidden"
            >
                {nav ? <FaTimes size={30} fill="white" /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col gap-16 justify-center z-40 items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-900">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="cursor-pointer capitalize text-4xl text-white"
                        >
                            <Link onClick={() => setNav(!nav)} href={`#${link}`}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}