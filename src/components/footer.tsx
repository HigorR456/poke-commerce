import Link from 'next/link'
import {TbPokeball} from 'react-icons/tb'
import {FaRegCopyright} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className='footer-wrap'>
                <div className='row-wrap'>
                    <div className='first-row'>
                        <div className='logo-wrap'>
                            <TbPokeball className='logo' />
                        </div>
                        <div className='links'>
                            <Link href='/' className='footer-link'>Home</Link>
                            <Link href='/' className='footer-link'>Products</Link>
                            <Link href='/' className='footer-link'>About</Link>
                        </div>
                    </div>
                    
                    <div className='second-row'>
                        <div className='legal'>
                            <div className='legal-text'>
                                <FaRegCopyright className='copyright' />&nbsp;
                                2023. All rights Reserved.
                            </div>

                            <div className='legal-links'>
                                <a>License</a>
                                <a>Terms</a>
                                <a>Privacy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;