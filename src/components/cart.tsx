import { useState, useContext } from 'react'
import Link from 'next/link'
import { CartContext } from '../context/CartContext'
import { BsFillCartFill, BsArrowReturnLeft, BsCart4 } from 'react-icons/bs'

const Cart = () => {
    const [showCart, setShowCart] = useState<boolean>(false);
    const { handleAddToCart, handleRemoveFromCart, handleDeleteItem, myCart, totalQty, totalValue } = useContext(CartContext);

    return (
        <>
            <div className='cart-wrap' onClick={() => {showCart ? setShowCart(false) : setShowCart(true)}}>
                <BsFillCartFill className='icon' />
            </div>

            {showCart && (
                <div className='background-block' onClick={() => setShowCart(false)}></div>
            )}

            <div className={showCart ? 'cart show' : 'cart hide' }>
                <div className='cart-content'>

                    <div className='your-cart'>
                        <button onClick={() => {showCart ? setShowCart(false) : setShowCart(true)}}><BsArrowReturnLeft /></button>
                        <div>Your Cart <span>({totalQty} items)</span></div>
                    </div>

                    <div className='cart-products'>
                        {myCart.length >= 1 && myCart.map((e:any) => (
                            <div key={e.id} className='content'>
                                <div className='image-wrap'>
                                    <img src={e.image} alt={e.name}></img>
                                </div>

                                <div className='name-wrap'>
                                    <div className='name'>{e.name}</div>
                                    <div className='quantity'>
                                        <button onClick={() => handleRemoveFromCart(e)} disabled={e.quantity === 1? true : false}>-</button>
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
                                <button onClick={() => {showCart ? setShowCart(false) : setShowCart(true)}}>Continue Shopping</button>
                            </div>
                        )}
                    </div>

                    {myCart.length >= 1 && (
                    <div className='subtotal-wrap'>
                        <div className='subtotal'>
                            <div>Subtotal:</div>
                            <div>${totalValue.toFixed(2)}</div>
                        </div>
                        <div className='button-wrap'>
                            <button>Checkout</button>
                        </div>
                    </div>)}

                </div>
            </div>
        </>
    );
};

export default Cart;