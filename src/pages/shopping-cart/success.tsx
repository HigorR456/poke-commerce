import Header from '../../components/header'
import Footer from '../../components/footer'
import { CartContext } from '../../context/CartContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'

const Success = () => {
    const { setMyCart, setTotalQty, setTotalValue } = useContext(CartContext);

    useEffect(() => {
        localStorage.clear();
        setMyCart([]);
        setTotalQty(0);
        setTotalValue(0);
    }, [])

    return (
        <>
            <Header />

            <main className='main-success-wrap'>
                <section>
                    <div className='container'>
                        <div className='content'>
                            <BsFillCartCheckFill className='icon' />
                            <h2>Thank You For Your Order!</h2>
                            <p>Check your email inbox for the receipt.</p>
                            <p>If you have any questions, please email <a href='mailto:order@example.com'>order@example.com</a></p>
                            <Link href='/products/1' className='link'>
                                <button>Continue Shopping</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    );
};

export default Success;