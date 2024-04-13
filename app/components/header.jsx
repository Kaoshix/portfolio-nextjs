import { MainLogo } from './main-logo';
import { NavigationBar } from './navigation-bar';

export const Header = () => {
    return (
        <header className='flex justify-between w-full pt-5'>
            <MainLogo />
            <NavigationBar />
        </header>
    )
}