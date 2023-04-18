import {useState} from 'react'
import Link from 'next/link'
import {TbPokeball} from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        toggleMenu ? 
        setToggleMenu(false) : 
        setToggleMenu(true)
    }

    return (
        <>
            <header className={toggleMenu ? 'header-wrap-mobile' : 'header-wrap'}>
                <div className='content-wrap'>
                    <div className='logo-wrap'>
                        <TbPokeball className='logo' />
                    </div>

                    <div className='menu-wrap' onClick={handleToggleMenu}>
                        <GiHamburgerMenu className={toggleMenu? 'menu-icon-hide' : 'menu-icon'} />
                        <GrClose className={toggleMenu? 'menu-icon' : 'menu-icon-hide'} />
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
