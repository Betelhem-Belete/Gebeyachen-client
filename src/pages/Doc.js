import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
function Doc() {
  return (
    <div>
      <Navbar />
      <div className="content">doc</div>
      <Footer />
    </div>
  );
}

export default Doc;
