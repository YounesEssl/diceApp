import React, { useState } from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, NavLink } from "react-router-dom";

// components
// import Login from "../login/Login";
import Todo from "../components/Todo";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logged, setLogged] = useState();
  const [userLogin, setUserLogin] = useState("");

  // const handleLogin = () => {
  //   navigate("/login");
  // };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/");
        console.log(user);
        setLogged(true);
        setUserLogin(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
        setLogged(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      {!logged ? (
        <main>
          <section>
            <div>
              <p> FocusApp </p>

              <form>
                <div>
                  <label htmlFor="email-address">Email address</label>
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
                  <button onClick={onLogin}>Login</button>
                </div>
              </form>

              <p className="text-sm text-white text-center">
                No account yet? <NavLink to="/signup">Sign up</NavLink>
              </p>
            </div>
          </section>
        </main>
      ) : (
        userLogin
      )}
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
