import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import "../components/Items.css";
import { UseLogout } from "../hooks/useLogout";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import Usefetch from "../hooks/useGet";
import { UseAuthContext } from "../hooks/useAuthContext";
function User() {
  const { user } = UseAuthContext();
  const id = user.id;

  const api = `https://gebeyachn-server-apiendpoint.onrender.com/ip/item/useritems/${id}`;
  const { data } = Usefetch(api);
  const all_items = data.cat_one;

  const { logout } = UseLogout();
  const history = useNavigate();
  const handl_logout = () => {
    logout();
    history("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container content">
        <div className="user_grid">
          <div className="user_coll_profile">
            <div className="user_pic">
              <Wrap>
                <WrapItem>
                  <Avatar size="2xl" name="Segun Adebayo" src={user.pic} />
                </WrapItem>
              </Wrap>
              <p>
                <i class="fa-solid fa-user"></i>
                {user.Name}
              </p>
              <p>
                <i class="fa-solid fa-phone"></i>
                {user.Phone}
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
              <li className="logout" onClick={handl_logout}>
                <i class="fa-solid fa-lock"></i>Log out
              </li>
            </ul>
          </div>
          <div className="user_coll_posts">
            <div className="post_title">
              <p> My POSTS</p>
            </div>
            <hr />
            <div className="post_items">
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
                            {items.Item_Price.toLocaleString()}
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;
