import { MainLogo } from './main-logo';
import { NavigationBar } from './navigation-bar';

export const Header = () => {
    return (
        <header className='flex justify-between w-full pt-5 mb-10'>
            <NavigationBar />
        </header>
    )
}