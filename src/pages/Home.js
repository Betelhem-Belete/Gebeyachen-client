import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import bg1 from "../assets/bg2.png";
import bg2 from "../assets/bg3.png";
import bg3 from "../assets/bg4.png";
import bg1Mobile from "../assets/mob1.png";
import bg2Mobile from "../assets/mob2.png";
import bg3Mobile from "../assets/mob3.png";
import Catagory from "../components/Catagory";
import Items from "../components/Items";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getCarouselImage = () => {
    if (windowWidth < 700) {
      return [bg1Mobile, bg2Mobile, bg3Mobile];
    }
    return [bg1, bg2, bg3];
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <div
          id="carouselExampleDark"
          className="carousel carousel-light slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {getCarouselImage().map((image, index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={index}
                key={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {getCarouselImage().map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                data-bs-interval="10000"
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`bg_img_${index}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
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
