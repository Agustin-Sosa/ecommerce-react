import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Skeleton } from "@mui/material";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getTotalQuantity } = useContext(CartContext);

  let totalInCart = getTotalQuantity(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const docRef = doc(productsCollection, id);
    getDoc(docRef).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, [id]);
  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado con éxito", { closeButton: true });
  };

  if (!item || !item.id) {
    return (
      <>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={100} />
            <Skeleton variant="rounded" width={200} height={60} />
          </div>
        </div>
      </>
    );
  }

  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};
