import React, { useState, useEffect } from "react";
import { useUserContext } from "../context/userContext";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/credenciales";
import { loginEmail, getPaymentsByUID } from "../functions/";

const Profile = () => {
  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(email, password);
  }

  const { user } = useUserContext();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function getPayments() {
      if (!user) return;
      console.log("user por usar", user.uid);
      const payments = await getPaymentsByUID(user.uid);
      setPayments(payments);
    }
    getPayments();
  }, [user]);
  return (
    <div>
      {user ? (
        <p>
          Bienvenido,
          <span>
            {user.email} - {user.uid}
          </span>
        </p>
      ) : (
        <div>
          <p>No estas logueado</p>
          <form onSubmit={login} />
        </div>
      )}
      {payments.length > 0 &&
        payments.map((payment) => (
          <div key={payment?.id}>
            <h3>{payment.amount / 100} </h3>
            <span>
              {payment.items.map((item) => (
                <p key={item.description}>{item.description}</p>
              ))}
            </span>
          </div>
        ))}

      {user && <button onClick={() => signOut(auth)}>Cerrar Sesión</button>}
    </div>
  );
};

export default Profile;
