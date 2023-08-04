import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import bg1 from "../assets/bg2.png";
import bg2 from "../assets/bg3.png";
import bg3 from "../assets/bg4.png";
import Catagory from "../components/Catagory";
import Items from "../components/Items";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div
          id="carouselExampleDark"
          class="carousel carousel-light slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={bg1} class="d-block w-100" alt="bg_img" />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={bg2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bg3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <main className="main1">
          <div className="coll1">
            <Catagory />
          </div>
          <div className="coll2">
            <Items />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
