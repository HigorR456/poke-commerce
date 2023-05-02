import {useState} from 'react'
import Link from 'next/link'
import {TbPokeball} from 'react-icons/tb'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Cart from './cart'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <>
            <header className={toggleMenu ? 'header-wrap-mobile' : 'header-wrap'}>
                <div className='content-wrap'>
                    <div className='menu-wrap' onClick={() => { toggleMenu? setToggleMenu(false) : setToggleMenu(true)}}>
                        <GiHamburgerMenu className={toggleMenu? 'menu-icon-hide' : 'menu-icon'} />
                        <AiOutlineClose className={toggleMenu? 'menu-icon' : 'menu-icon-hide'} />
                    </div>

                    <div className='logo-wrap'>
                        <Link href='/'>
                            <TbPokeball className='logo' />
                        </Link>
                    </div>

                    <nav className='nav-bar'>
                        <Link href='/' className='nav-link'>Home</Link>
                        <Link href='/products/1' className='nav-link'>Products</Link>
                        <Link href='/' className='nav-link'>About</Link>
                    </nav>
                    
                    <Cart />
                </div>
            </header>
        </>
    );
};

export default Header;
