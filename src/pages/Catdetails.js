import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import "../components/Items.css";

import Catagory from "../components/Catagory";
import { Link, useParams } from "react-router-dom";
import Usefetch from "../hooks/useGet";

function Cat_details() {
  const _id = useParams();
  const id = _id.id;
  console.log(id);
  const api = `http://localhost:8000/ip/item/catitems/${id}`;
  const { data } = Usefetch(api);
  const all_items = data.cat_one;
  return (
    <div>
      <Navbar />
      <div className="content">
        <main className="main1">
          <div className="coll1">
            <Catagory />
          </div>
          <div className="coll2">
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
                        <a href="/" class="snav1">
                          <button>Add +</button>
                          <p>{items.Item_Price}$</p>
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
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Cat_details;
