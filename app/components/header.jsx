import { MainLogo } from './main-logo';
import { NavigationBar } from './navigation-bar';

export const Header = () => {
    return (
        <header className='flex justify-between max-w-screen-2xl m-auto pt-5'>
            <MainLogo />
            <NavigationBar />
        </header>
    )
}