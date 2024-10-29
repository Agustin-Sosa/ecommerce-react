export const ItemDetail = ({ item }) => {
  return (
    <div>
      <img src={item.imageUrl} alt="" style={{ width: "300px" }} />
      <h2>{item.title}</h2>
      <h4>{item.description}</h4>
    </div>
  );
};
