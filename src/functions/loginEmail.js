import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/credenciales";

async function loginEmail(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  console.log(result);
  return result;
}

export default loginEmail;
