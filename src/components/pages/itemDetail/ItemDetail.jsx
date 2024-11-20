import Counter from "../../common/counter/Counter";

export const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
  return (
    <div>
      <img src={item.imageUrl} alt="" style={{ width: "300px" }} />
      <h2>{item.title}</h2>
      <h4>{item.description}</h4>
      <Counter
        stock={item.stock}
        agregarAlCarrito={agregarAlCarrito}
        totalInCart={totalInCart}
      />
    </div>
  );
};
