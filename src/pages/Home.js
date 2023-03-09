import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import localStorage from "localStorage";

// components
import Todo from "../components/Todo";
import GameList from "../components/GameList";
import Test from "../components/Test";

const Home = () => {
  const navigate = useNavigate();

  // fontion de connection qui redirige vers la page /login
  const handleLogin = () => {
    navigate("/login");
  };

  // fonction de deconnection qui redirige vers la pas root /
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        // retire le mail du storage
        localStorage.removeItem("email");
        // retire la valeur true du storage
        localStorage.removeItem("logged");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        /* 
        Possibilité de rajouter des fonction pour faire des notif de deconnection etc
        */
      });
  };

  return (
    <>
      <nav>
        {/* \/ | JSON.parse(localStorage.getItem("email")) | \/ ligne de code pour récupérer l'adresse mail en tant que pseudo */}
        <p>{JSON.parse(localStorage.getItem("email"))}</p>
        <p>Welcome Home</p>
        <div>
          <button
            // balise btn peut être changer en input mais il faut garder les deux ligne de code en-dessous
            onClick={handleLogin}
            hidden={localStorage.getItem("logged") ? true : false}
            // localStorage.getItem("logged") : si le user est co, ça return true et invercement
          >
            Login
          </button>
          {/* peut être changer en input mais faut garder le onClick={onLogin} */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div>
        <Todo />
      </div>
      <button
        onClick={() => {
          const date = new Date();
          console.log(
            `Le jour : ${date.getDate()}| Le Mois : ${date.getMonth() + 1}`
          );
          console.log(
            `L'heure actuel : ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
          );
        }}
      >
        date actuelle
      </button>
      <p>
        ---------------------------------------------------------------------
      </p>
      <Test />
      <p>
        ----------------------------------------------------------------------------------------------------
      </p>
      <GameList />
    </>
  );
};

export default Home;
