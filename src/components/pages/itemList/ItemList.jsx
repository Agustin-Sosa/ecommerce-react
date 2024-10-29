import { Card } from "../../common/card/Card";

export const ItemList = ({ myProducts }) => {
  return (
    <>
      <h2>Listado de Productos</h2>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
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
    </>
  );
};
