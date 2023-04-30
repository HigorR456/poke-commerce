import {createContext, useContext, useState, useEffect} from 'react';

export const CartContext = createContext<any>({});

export const CartProvider = ({ children }: any) => {
    const [myCart, setMyCart] = useState<Array<any>>([])

    const handleAddToCart = (info: any, quantity: number) => {

      let didAmountChange = false;
      myCart.map((e:any) => {
        if (e.id === info.id) {
          didAmountChange = true;
        }
      });

      if (didAmountChange) {
        const updatedCartItems = myCart.map((e:any) => {
          if (e.id === info.id)  {
              return {...e, quantity: e.quantity + quantity}
          } else {
              return e
          }
        });
        setMyCart([...updatedCartItems]);
      } else {
        setMyCart([...myCart, {...info, quantity: quantity}]);
      }

      console.log(myCart);
    }

    return (
        <CartContext.Provider value={{handleAddToCart}}>
            {children}
        </CartContext.Provider>
    );
};

//export const useCartContext = () => useContext(Context);