import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashborad";
import Servic from "./pages/Servic";
import About from "./pages/About";
import Catdetails from "./pages/Catdetails";
import User from "./pages/User";
import AddItem from "./pages/AddItem";
import CatagoryPg from "./pages/CatagoryPg";
import Signup from "./pages/Signup";
import Doc from "./pages/Doc";
import { UseAuthContext } from "./hooks/useAuthContext";
import Itemsdetails from "./pages/Itemsdetails";
import Notfound from "./pages/404";

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
        <Route path="/catagory" element={<CatagoryPg />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/user" element={user ? <User /> : <Home />} />
        <Route path="/itemdetail/:id" element={<Itemsdetails />} />
        <Route path="/additem" element={user ? <AddItem /> : <Login />} />
        <Route path="/categorydetail/:id" element={<Catdetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
