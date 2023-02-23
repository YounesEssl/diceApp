import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import localStorage from "localStorage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        localStorage.setItem("email", JSON.stringify(user.email));
        localStorage.setItem("logged", true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // peut y être ajouter des balises ou alert qui prévienne que l'utilisateur n'à pas le bon mdp ou mail
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <p> FocusApp </p>

            <form>
              <div>
                <label htmlFor="email-address">Email address</label>

                {/* ne pas toucher cette input excepté en css */}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                {/* ne pas toucher cette input excepté en css */}
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                {/* peut être changer en input mais faut garder le onClick={onLogin} */}
                <button onClick={onLogin}>Login</button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet? <NavLink to="/signup">Sign up</NavLink>
              {/*              /\ liens de redirection vers la page inscription/\  */}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
