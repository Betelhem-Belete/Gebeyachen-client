import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashborad";
import Servic from "./pages/Servic";
import About from "./pages/About";
import Catdetails from "./pages/Catdetails";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Servic />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/catagory" element={<Catdetails />} />
        <Route path="/login" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
