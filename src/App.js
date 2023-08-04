import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashborad";
import Servic from "./pages/Servic";
import About from "./pages/About";
import Catdetails from "./pages/Catdetails";
import User from "./pages/User";
import Signup from "./pages/Signup";
import { UseAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = UseAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/signup" element={user ? <Home /> : <Signup />} />
        <Route path="/service" element={<Servic />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/catagory" element={<Catdetails />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
