import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/credenciales";

async function createCheckoutSession(uid, cart) {
  const collectionRef = collection(db, `customers/${uid}/checkout_sessions`);
  addDoc(collectionRef, {
    mode: "payment",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    collect_shipping_address: true,
    line_items: cart.map((item) => {
      return {
        quantity: 1,
        price: item.priceId,
      };
    }),
  });
}

export default createCheckoutSession;
