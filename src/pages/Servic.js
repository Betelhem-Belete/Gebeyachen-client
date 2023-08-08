import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./styles.css";
import "./services.css";
function Servic() {
  return (
    <div>
      <Navbar />
      <div className="content container">
        <main className="main_service">
          <div class="slogan2">
            <h1
              className="service_header"
              style={{ font: " bold 120px brush script mt" }}
            >
              Welcome to Gebeyachen
            </h1>
            <br />
          </div>
          <div class="service">
            <div class="content">
              <div class="service-img">
                <h1 class="service-title">Services</h1>
              </div>
              <div class="service-1 serv">
                <div class="header">
                  <h3 class="head">
                    <i class="fa-solid fa-cart-shopping"> </i>
                    <span class="label">Online Shopping</span>
                  </h3>
                </div>
                <p>
                  A wide range of products available for our customers to
                  browse, compare and purchase and also to sell with 0 price.
                </p>
                <hr />
              </div>
              <div class="service-2 serv">
                <div class="header">
                  <h3 class="head">
                    <i class="fa-solid fa-envelope fa-beat"></i>
                    <span class="label">Customer Support</span>
                  </h3>
                </div>
                <p>
                  Access to customer service through various channels like email
                  or phone to fullfill the customers needs.
                </p>
                <hr />
              </div>
              <div class="service-3 serv">
                <div class="header">
                  <h3 class="head">
                    <i class="fa-solid fa-percent"> </i>
                    <span class="label">Discount and Promotions</span>
                  </h3>
                </div>
                <p>
                  Gebeyachen offers regular sales, discounts, and promotions to
                  atrract and retain customers.
                </p>
                <hr />
              </div>
              <div class="service-4 serv">
                <div class="header">
                  <h3 class="head">
                    <i class="fa-solid fa-person"></i>
                    <span class="label">Personalized Accounts </span>
                  </h3>
                </div>
                <p>
                  Each customer has its own account with order history, saved
                  addresses, and personalized settings.
                </p>
                <hr />
              </div>
              <div class="service-5 serv">
                <div class="header">
                  <h3 class="head">
                    <i class="fa-brands fa-product-hunt"></i>
                    <span class="label">Product Recommendation</span>
                  </h3>
                </div>
                <p>
                  Gebeyachen offers AI-powerd recommendations based on customer
                  preferences and browsing history.
                </p>
                <hr />
              </div>
              <div class="service-6 serv">
                <div class="header">
                  <h3 class="head">
                    <i class="fa-solid fa-heart"> </i>
                    <span class="label">WishList</span>
                  </h3>
                </div>
                <p>
                  Provides a feature that lets customers save products they are
                  interested in for future reference.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Servic;
