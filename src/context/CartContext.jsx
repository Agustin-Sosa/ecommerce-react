import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let isInCart = cart.some((el) => el.id === product.id);

    if (isInCart) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const removeById = (id) => {
    let arrayFiltrado = cart.filter((elem) => elem.id !== id);
    setCart(arrayFiltrado);
  };

  const resetCart = () => {
    setCart([]);
  };

  const getTotalQuantity = (id) => {
    const product = cart.find((elemento) => elemento.id === id);
    return product ? product.quantity : 0;
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  const getTotalUnits = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalQuantity,
    getTotalAmount,
    getTotalUnits,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
