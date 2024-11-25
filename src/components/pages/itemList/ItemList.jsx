import { Card } from "../../common/card/Card";
import "./itemList.css";

export const ItemList = ({ myProducts }) => {
  return (
    <>
      <div className="item-list-container">
        <h2 className="subtitle">Listado de Productos</h2>
        <div className="card-container">
          {myProducts.map(({ id, title, price, stock, imageUrl }) => (
            <Card
              key={id}
              id={id}
              title={title}
              price={price}
              stock={stock}
              image={imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
