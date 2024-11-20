import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../products";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let docsRef = productsCollection;

    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }

    getDocs(docsRef).then((res) => {
      let arrayLimpio = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setMyProducts(arrayLimpio);
    });
  }, [name]);

  // const funcionParaAgregar = () => {
  //   const productsCollection = collection(db, "products");

  //   products.forEach((product) => {
  //     addDoc(productsCollection, product);
  //   });
  // };

  if (myProducts.length === 0) {
    return (
      <>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={100} />
            <Skeleton variant="rounded" width={200} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={100} />
            <Skeleton variant="rounded" width={200} height={60} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={200} height={100} />
            <Skeleton variant="text" width={200} height={100} />
            <Skeleton variant="rounded" width={200} height={60} />
          </div>
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
    <div>
      <h2>
        Bienvenido! Somos una empresa familiar destinada a la produccion y
        comercializacion de leña y carbón.
      </h2>
      <ItemList myProducts={myProducts} />
      {/* <button onClick={funcionParaAgregar}>cargar productos</button> */}
    </div>
  );
};
