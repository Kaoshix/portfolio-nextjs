import { ButtonHireMe } from "./ui/button-hire-me";

export const NavigationBar = () => {
    return (
        <nav>
            <ul className="flex gap-6 items-center font-semibold text-lg">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
                <ButtonHireMe />

            </ul>
        </nav>
    )
}