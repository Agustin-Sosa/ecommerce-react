import { useState } from "react";

const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    stock - totalInCart > contador
      ? setContador(contador + 1)
      : alert("stock maximo");
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h2>Contador = {contador}</h2>
      <button onClick={restar}>Restar</button>

      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
