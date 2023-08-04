import React from "react";
import "./Catagory.css";

function Catagory() {
  return (
    <div>
      <div className="container catagorys">
        <h2>Categories</h2>
        <div className="cats">
          {/* catagores cards */}
          <div class="card_cat">
            <img src=".." alt="cat" />
            <div className="discription">
              <h4>Electronics</h4>
              <p>discription of the item will be hear on this plase</p>
            </div>
          </div>
          {/* card end hear */}
          {/* catagores cards */}
          <div class="card_cat">
            <img src=".." alt="cat" />
            <div className="discription">
              <h4>Electronics</h4>
              <p>discription of the item will be hear on this plase</p>
            </div>
          </div>
          {/* card end hear */}
        </div>
      </div>
    </div>
  );
}

export default Catagory;
//  <img src="..." class="card-img-top" alt="..." />
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//             </div>
