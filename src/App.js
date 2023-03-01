import Home from "./pages/Home";
import Signup from "./login/SignUp";
import Login from "./login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";



function App() {
  
  return (
    
    <Router>

      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
