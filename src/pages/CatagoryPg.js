import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Usefetch from "../hooks/useGet";

import "./styles.css";
import { Link } from "react-router-dom";

const CatagoryPg = () => {
  const api = "https://gebeyachn-server-apiendpoint.onrender.com/ip/cat/allcat";
  const { data } = Usefetch(api);
  const catagory = data.cats;
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="container catagoryPg">
          <h2>Categories</h2>
          <hr />
          {catagory && (
            <div className="cats">
              {catagory.map((cats) => (
                <Link to={`/categorydetail/${cats._id}`}>
                  <div class="card">
                    <img
                      src={cats.cat_pic}
                      class="card-img-top"
                      alt={cats.Catagory_Name}
                      className="cat_imgs"
                    />
                    <div class="card-body">
                      <h5>{cats.catagory_Name}</h5>
                      <p class="card-text">{cats.cat_description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {!catagory && (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CatagoryPg;
