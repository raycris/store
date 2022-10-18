import { db } from "../firebase/credenciales";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";

async function getProductById(id) {
  const collectionRef = collection(db, "products");
  const docuRef = doc(collectionRef, id);
  const snapDoc = await getDoc(docuRef);
  const product = snapDoc.data();

  // obtenemos el/los precio(s) del producto
  const snapPrice = await getDocs(collection(snapDoc.ref, "prices"));
  product.price = snapPrice.docs[0].data();
  product.priceId = snapPrice.docs[0].id;

  return product;
}

export default getProductById;
