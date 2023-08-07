import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import not from "../assets/404.png";
function Notfound() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <img
          className="pag_not"
          src={not}
          alt="404 pagenot found"
          width={"100%"}
        />
        <h1 className="pag_not_h1">404 Page Not Found</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Notfound;
