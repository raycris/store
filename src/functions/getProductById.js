import { db } from "../firebase/credenciales";
import { doc, collection, getDoc } from "firebase/firestore";

async function getProductById(id) {
  const collectionRef = collection(db, "products");
  const docuRef = doc(collectionRef, id);
  const snapDoc = await getDoc(docuRef);
  const product = snapDoc.data();

  return product;
}

export default getProductById;
