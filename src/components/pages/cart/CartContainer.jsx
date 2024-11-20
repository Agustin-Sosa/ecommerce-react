import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCarrito = getTotalAmount();

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              width: "400px",
              display: "flex",
              gap: "50px",
            }}
          >
            <h2>{product.title}</h2>
            <h3>Cantidad: {product.quantity}</h3>
            <button onClick={() => removeById(product.id)}>
              Eliminar <DeleteForeverIcon />
            </button>
          </div>
        );
      })}

      {cart.length > 0 && <button onClick={resetCart}>Limpiar carrito</button>}

      {cart.length > 0 && <h2>Total a pagar: $ {totalEnElCarrito}</h2>}

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button>Finalizar Compra</Button>
        </Link>
      )}
    </div>
  );
};
