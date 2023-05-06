import Header from '../../components/header'
import Footer from '../../components/footer'
import { CartContext } from '../../context/CartContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { BsArrowReturnLeft, BsCart4 } from 'react-icons/bs'

const ShoppingCart = () => {
  const { handleAddToCart, handleRemoveFromCart, handleDeleteItem, myCart, totalQty, totalValue } = useContext(CartContext);
  const router = useRouter();

  return (
    <>
      <div className='no-click'>
        <Header />
      </div>

      <main className='main-shopping-cart'>
        <section>
          <div className='container'>
            <div className='content'>
              <div className='your-cart'>
                <button onClick={() => router.back()}><BsArrowReturnLeft /></button>
                <div>Shopping Cart <span>({totalQty} items)</span></div>
              </div>

              <div className='cart-items-wrap'>

                {myCart.length >= 1 && myCart.map((e: any) => (
                  <div key={e.id} className='content'>
                    <div className='image-wrap'>
                      <img src={e.image} alt={e.name}></img>
                    </div>

                    <div className='info-wrap'>
                      <div className='info'>
                        <div className='name'>{e.name}</div>
                        <div>EXP {e.exp}</div>
                        <div>{e.types.map((e: any) => {
                          return ( <div>{e}</div>)})}
                        </div>
                      </div>
                      
                      <div className='quantity'>
                        <button onClick={() => handleRemoveFromCart(e)} disabled={e.quantity === 1 ? true : false}>-</button>
                        <div>{e.quantity}</div>
                        <button onClick={() => handleAddToCart(e, 1)}>+</button>
                      </div>
                    </div>

                    <div className='price-wrap'>
                      <div className='price'>${(e.exp * e.quantity).toFixed(2)}</div>
                      <button onClick={() => handleDeleteItem(e)}>x</button>
                    </div>
                  </div>
                ))}

                {myCart.length < 1 && (
                  <div className='empty-cart'>
                    <BsCart4 className='icon' />
                    <div>Your cart is empty</div>
                    <Link href='/products/1'><button>Continue Shopping</button></Link>
                  </div>)}

              </div>

              {myCart.length >= 1 && (
                <div className='checkout-wrap'>

                  <div className='subtotal'>
                    <div>Subtotal:</div>
                    <div>${totalValue.toFixed(2)}</div>
                  </div>

                  <div className='button-wrap'>
                    <Link href='/shopping-cart/success' className='button-link'>
                      <button>Confirm purchase</button>
                    </Link>
                  </div>

                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ShoppingCart;