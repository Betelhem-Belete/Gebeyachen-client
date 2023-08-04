import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
function User() {
  return (
    <div>
      <Navbar />
      <div className="content">user</div>
      <Footer />
    </div>
  );
}

export default User;
