import Link from 'next/link'
import {TbPokeball} from 'react-icons/tb'

const Header = () => {
    return (
        <>
            <header className='header-wrap'>
                <div className='content-wrap'>
                    <div className='logo-wrap'>
                        <TbPokeball className='logo' />
                    </div>
                    <nav className='nav-bar'>
                        <Link href='/' className='nav-link'>Home</Link>
                        <Link href='/' className='nav-link'>Products</Link>
                        <Link href='/' className='nav-link'>About</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
