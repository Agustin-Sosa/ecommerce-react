import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador = {contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Counter;
