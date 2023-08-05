import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";

function Dashborad() {
  return (
    <>
      <Navbar />
      <div className="container content">
        <div className="Dash_top"></div>
        <div className="Dash_middle"></div>
        <div className="Dash_soceal"></div>
        <div className="Dash_chart"></div>
        <div className="Dash_user"></div>
      </div>
      <Footer />
    </>
  );
}

export default Dashborad;
