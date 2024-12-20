import { FaArrowDown } from "react-icons/fa6";

export const ArrowHomeButton = () => {
    return (
        <a href="#projects" className="block w-fit animate-[bouncing_3s_infinite] mx-auto mb-10" aria-label="Projects list">
            <FaArrowDown size={40} />
        </a>
    )
}