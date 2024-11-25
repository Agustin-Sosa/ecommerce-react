import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";

export const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  if (cart.length === 0) {
    return (
      <>
        <h1 className="cart-title">Carrito de compras</h1>
        <div className="cart-vacio">
          <h3>Carrito vacío</h3>

          <Link to="/">
            <Button variant="contained">Continuar comprando</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="cart-title">Carrito de compras</h1>
      <div className="cart-container">
        {cart.map((product) => {
          return (
            <>
              <div>
                <div className="item-cart" key={product.id}>
                  <h2>{product.title}</h2>
                  <h3>Cantidad: {product.quantity}</h3>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => removeById(product.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </>
          );
        })}
        {cart.length > 0 && (
          <div className="">
            <Button variant="outlined" color="error" onClick={resetCart}>
              Limpiar carrito
            </Button>
          </div>
        )}
        {cart.length > 0 && (
          <div className="">
            <h2>Total a pagar: $ {totalEnElCarrito}</h2>
          </div>
        )}
        {cart.length > 0 && (
          <Link to="/checkout" className="">
            <Button variant="contained" color="success">
              Finalizar Compra
            </Button>
          </Link>
        )}
      </div>
    </>
  );
};
