// CartContext.js
import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItems = () => {
    setCartItems((prev) => prev + 1);
  };

  const removeItems = () => {
    setCartItems((prev) => prev - 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItems,
        removeItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
