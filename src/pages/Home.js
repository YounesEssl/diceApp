import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import localStorage from "localStorage";

// components
// import Login from "../login/Login";
import Todo from "../components/Todo";

const Home = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const [logged, setLogged] = useState();
  // const [userLogin, setUserLogin] = useState("");

  const handleLogin = () => {
    navigate("/login");
  };

  // const onLogin = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // navigate("/");
  //       console.log(user);
  //       setLogged(true);
  //       setUserLogin(user.email);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        localStorage.removeItem("email");
        localStorage.removeItem("logged");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <p>{localStorage.getItem("email")}</p>
        <p>Welcome Home</p>
        {/* <button onClick={console.log(user)}>user</button> */}
        <div>
          <button
            onClick={handleLogin}
            hidden={localStorage.getItem("logged") ? true : false}
          >
            Login
          </button>
          <button onClick={handleLogout}>Logout</button>
          {/* <button onClick={handleLogin}>Login</button> */}
        </div>
      </nav>
      <div>
        <Todo />
      </div>
    </>
  );
};

export default Home;
