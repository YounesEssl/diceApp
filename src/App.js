import Home from "./pages/Home";
import Signup from "./login/SignUp";
import Login from "./login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Catalogue from "./components/Catalogue";
import Wish from "./components/Wish";
import Event from "./components/Event";
import Account from "./components/Account";
import Social from "./components/Social";
import Book from "./components/Book";
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
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/events" element={<Event />} />
          <Route path="/account" element={<Account />} />
          <Route path="/social" element={<Social />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
