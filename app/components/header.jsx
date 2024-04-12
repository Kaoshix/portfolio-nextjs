import { MainLogo } from './main-logo';
import { NavigationBar } from './navigation-bar';

export const Header = () => {
    return (
        <header className='flex justify-between'>
            <MainLogo />
            <NavigationBar />
        </header>
    )
}