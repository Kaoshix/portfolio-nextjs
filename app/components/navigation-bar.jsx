import { ButtonContact } from "./ui/button-contact"

export const NavigationBar = () => {
    return (
        <nav>
            <ul className="flex gap-6 items-center font-semibold text-sm">
                <li><a href="#home-section">Home</a></li>
                <li><a href="#project-section">Projects</a></li>
                <li>
                    <a href="">
                        <ButtonContact />
                    </a>
                </li>
            </ul>
        </nav>
    )
}