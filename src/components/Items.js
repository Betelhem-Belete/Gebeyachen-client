import React from "react";
import "./Items.css";
import Usefetch from "../hooks/useGet";
import { Link } from "react-router-dom";

function Items() {
  const api =
    "https://gebeyachn-server-apiendpoint.onrender.com/ip/item/allitems";
  const { data } = Usefetch(api);
  const all_items = data.all_Items;
  console.log("items", all_items);
  return (
    <div className="items">
      {/* card starts */}
      {all_items &&
        all_items.map((items) => (
          <Link to={`/itemdetail/${items._id}`} className="links">
            <div class="card">
              <img
                src={items.Item_Images}
                class="card-img-top"
                alt={items.Item_Description}
              />
              <div class="card-body">
                <h6 class="card-title">{items.Item_Name}</h6>
                <i class="fa-solid fa-star" style={{ color: "#fad000" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#fad000" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#fad000" }}></i>
                <i class="fa-solid fa-star" style={{ color: "#fad000" }}></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <hr />
                <a href="/" class="snav1">
                  <button>Add +</button>
                  <p>{items.Item_Price.toLocaleString()}$</p>
                </a>
              </div>
            </div>
          </Link>
        ))}
      {!all_items && (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {/* card ends  */}
    </div>
  );
}

export default Items;
