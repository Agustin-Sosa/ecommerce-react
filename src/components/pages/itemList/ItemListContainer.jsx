import { products } from "../../../products";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const unaFraccion = products.filter(
      (producto) => producto.category === name
    );
    const myProductsPromise = new Promise((res) => {
      setTimeout(() => {
        res(name ? unaFraccion : products);
      }, 1000);
    });

    myProductsPromise
      .then((data) => {
        setMyProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <div>
      <ItemList myProducts={myProducts} />
    </div>
  );
};
