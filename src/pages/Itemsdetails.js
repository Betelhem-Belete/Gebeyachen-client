import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";

import { useParams } from "react-router-dom";
import Usefetch from "../hooks/useGet";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
function Itemsdetails() {
  const _id = useParams();
  const id = _id.id;
  console.log(id);
  const api = `http://localhost:8000/ip/item/oneitem/${id}`;
  const { data } = Usefetch(api);
  const items = data.all_Items;
  console.log(items);
  return (
    <div>
      <Navbar />
      <div className=" item_content">
        <div className="item_d_grid">
          <div className="item_img_coll">
            {items && (
              <div class="card" style={{ width: "95%" }}>
                <img
                  src={items.Item_Images}
                  class="card-img-top"
                  alt={items.Item_Name}
                />
                <div class="card-body">
                  <h5 class="card-title">
                    <span> </span>
                    {items.Item_Name}
                  </h5>
                  <hr />
                  <p class="card-text">
                    <span> </span>
                    {items.Item_Description}
                  </p>
                  <p class="card-text">
                    <span>Brand : </span>
                    {items.Item_Brand}
                  </p>
                  <p class="card-text">
                    <span>Address : </span>
                    {items.Item_poster.Address}
                  </p>
                  <hr />
                  <div className="but">
                    <button>
                      <span>Birr : </span>
                      {items.Item_Price}
                    </button>
                    <span class="snav1">
                      <button>Add +</button>
                    </span>{" "}
                    <p>Make An offer</p>
                  </div>
                </div>
              </div>
            )}
            {!items && (
              <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}{" "}
          </div>
          <div className="item_poster_coll">
            {items && (
              <>
                {" "}
                <div className="price">
                  <h3>ETB : {items.Item_Price} $</h3>
                  <hr />
                  <p>market price : {items.Item_Price + 500}</p>
                  <p>request callback</p>
                </div>
                <div className="user">
                  <div className="pp">
                    {items && (
                      <Wrap>
                        <WrapItem>
                          <Avatar
                            size="md"
                            name="Segun Adebayo"
                            src={items.Item_poster.pic}
                          />
                        </WrapItem>
                      </Wrap>
                    )}
                    <h4>{items.Item_poster.Name}</h4>
                  </div>
                  <hr />
                  <p className="p">
                    <i class="fa-solid fa-phone">
                      <span>{"    "}</span>
                      {items.Item_poster.Phone}
                    </i>
                  </p>
                  <p className="p">
                    <i class="fa-brands fa-rocketchat">
                      <span>{"    "}</span>start chat
                    </i>
                  </p>
                </div>
                <div className="sefty">
                  <h4>Safety tips</h4>
                  <ul>
                    <li>Don't pay in advance, including for delivery</li>
                    <li>Meet the seller at a safe public place</li>
                    <li>
                      Inspect the item and ensure it's exactly what you want
                    </li>
                    <li>
                      On delivery, check that the item delivered is what was
                      inspected
                    </li>
                    <li>Only pay when you're satisfied</li>
                  </ul>
                </div>
                <div className="report">
                  <p>Mark unavailabel</p>
                  <p>Report Abuse</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Itemsdetails;
