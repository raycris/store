/* eslint-disable import/no-anonymous-default-export */
import { db } from "../firebase/credenciales";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function () {
  const collectionRef = collection(db, "products");
  const activeItems = query(collectionRef, where("active", "==", true));
  const snaps = await getDocs(activeItems);
  const products = [];

  // ciclo asíncrono para obtener los precios junto con la descripción del producto
  for await (const snap of snaps.docs) {
    const product = snap.data();
    product.id = snap.id;
    const snapPrice = await getDocs(collection(snap.ref, "prices"));
    product.price = snapPrice.docs[0].data();
    product.priceId = snapPrice.docs[0].id;
    products.push(product);
  }

  return products;
}
