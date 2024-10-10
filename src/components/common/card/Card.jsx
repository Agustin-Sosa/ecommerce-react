import "./card.css";

export const Card = ({ title, price, stock }) => {
  return (
    <div className="container-card">
      <h2>Nombre: {title}</h2>
      <h3>Precio: ${price}</h3>
      <h3>Stock: {stock}</h3>
    </div>
  );
};
