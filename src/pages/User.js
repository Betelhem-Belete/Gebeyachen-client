import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import Items from "../components/Items";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
function User() {
  return (
    <div>
      <Navbar />
      <div className="container content">
        <div className="user_grid">
          <div className="user_coll_profile">
            <div className="user_pic">
              <Wrap>
                <WrapItem>
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                </WrapItem>
              </Wrap>
              <p>
                <i class="fa-solid fa-user"></i>user Name
              </p>
              <p>
                <i class="fa-solid fa-phone"></i>Phone NO
              </p>
            </div>
            <ul>
              <li>
                <i class="fa-solid fa-calendar-days"></i>Add event
              </li>
              <li>
                <i class="fa-solid fa-comment"></i>Feedback
              </li>
              <li>
                <i class="fa-solid fa-masks-theater"></i>Performance
              </li>
              <li>
                <i class="fa-brands fa-servicestack"></i>My clients
              </li>
            </ul>
          </div>
          <div className="user_coll_posts">
            <div className="post_title">
              <p> My POSTS</p>
            </div>
            <hr />
            <div className="post_items">
              <Items />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;
