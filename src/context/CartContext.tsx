import {createContext, useContext, useState, useEffect} from 'react';

export const CartContext = createContext<any>({});

export const CartProvider = ({ children }: any) => {
    const [myCart, setMyCart] = useState<Array<any>>([])
    const [totalQty, setTotalQty] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number>(0);

    useEffect(() => {
      const cartInfo = [myCart, totalQty, totalValue];
      if (myCart.length !== 0) {
        localStorage.setItem('cartInfo', JSON.stringify(cartInfo))
      }
    }, [myCart]);

    useEffect(() => {
      const storage = JSON.parse(localStorage.getItem('cartInfo')!);
      if (storage) {
        setMyCart(storage[0]);
        setTotalQty(storage[1]);
        setTotalValue(storage[2]);
      }
    }, []);

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

      setTotalQty((prev) => {return prev + quantity})
      setTotalValue((prev) => {return prev + (info.exp * quantity)})
    }

    const handleRemoveFromCart = (info: any) => {
      const updatedCartItems = myCart.map((e: any) => {
        if (e.id === info.id) {
          return {...e, quantity: e.quantity - 1}
        } else {
          return e
        }
      });
      setMyCart([...updatedCartItems]);

      setTotalQty((prev) => {return prev - 1})
      setTotalValue((prev) => {return prev - (info.exp)})
    }

    const handleDeleteItem = (info: any) => {
      if (myCart.length <= 1) {
        setMyCart([]);
        setTotalQty(0);
        setTotalValue(0);
      } else {
        const updatedCartItems = myCart.filter(e => 
          e.id !== info.id
        )
        setMyCart([...updatedCartItems])
        setTotalQty((prev) => {return prev - info.quantity})
        setTotalValue((prev) => {return prev - (info.exp * info.quantity)})
      }
    }

    return (
        <CartContext.Provider value={{
          handleAddToCart, handleRemoveFromCart, handleDeleteItem, myCart, totalQty, totalValue,
          setMyCart, setTotalQty, setTotalValue}}>
            {children}
        </CartContext.Provider>
    );
};

//export const useCartContext = () => useContext(Context);