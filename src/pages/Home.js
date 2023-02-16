import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import Login from "../login/Login";
import Todo from "../components/Todo";

const Home = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState("");

  // const handleLogin = () => {
  //   navigate("/login");
  // };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <Login />
      <nav>
        <p>Welcome Home</p>
        {/* <button onClick={console.log(user)}>user</button> */}
        <div>
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
