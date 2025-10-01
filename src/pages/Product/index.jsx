import { useContext, useEffect, useState } from "react";
import Html from "./html";
import CartContext from "../../context/ShoppingContext";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("product")) || [];
    setProduct(getData);
  }, []);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("count")) || [];
    setCartItems(getData);
  }, []);

  const addToCart = (productToAdd) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...productToAdd, count: 1 }];
      }

      localStorage.setItem("count", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <>
      <Html addToCart={addToCart} product={product} setProduct={setProduct} />
    </>
  );
};
export default Product;
