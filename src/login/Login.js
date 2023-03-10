import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import localStorage from "localStorage";
import logowhite from "../images/logowhite.png";
import "./Login.css";
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
        <section className="container">
          <div className="header">
          <img src={logowhite} alt="logo" className="logo"></img>
            <h1 className="title">Hi, Welcome Back ! 👋</h1>
          </div>
          <div className="form">
            <p>Email</p>
            
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="example@domain.com"
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <p>Password</p>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <div className="forgot">
              <p>Forgot Password</p>
            </div>
            <div className="remember">
              <input type="checkbox" className="checkbox" />
              <p className="textremember">Remember me</p>
            </div>
            <div>
              <button className="loginbtn" onClick={onLogin}>Login</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
