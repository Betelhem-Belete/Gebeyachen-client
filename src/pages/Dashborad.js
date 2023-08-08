import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./styles.css";
import "../pages/login.css";
import { useToast } from "@chakra-ui/react";
import { UseAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

function Dashborad() {
  const Toast = useToast();
  const { user } = UseAuthContext();
  const navigate = useNavigate();
  if (!user.isAdmin) {
    navigate("/");
  }
  const [catagory_Name, setcatagory_Name] = useState("");
  const [cat_description, setcat_description] = useState("");
  const [pic, setPic] = useState(null);
  const [PicLoading, setPicLoading] = useState(false);
  ////////////////////
  const handle_uploade = (pic) => {
    const uploade = "https://api.cloudinary.com/v1_1/yeabtsega/image/upload";
    setPicLoading(true);
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat_app");
      data.append("cloud_name", "yeabtsega");
      fetch(uploade, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());

          setPicLoading(false);
        })
        .catch((err) => {
          Toast({
            title: err.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          console.log(err);
          setPicLoading(false);
        });
    } else {
      Toast({
        title: "image type is not supported",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return setPicLoading(false);
    }
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    const cat_pic = pic;
    console.log(catagory_Name, cat_description, cat_pic);
    if (!catagory_Name || !cat_description || !cat_pic) {
      Toast({
        title: "fill all the space",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    try {
      const response = await fetch(
        "https://gebeyachn-server-apiendpoint.onrender.com/ip/cat/newcat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            catagory_Name,
            cat_description,
            cat_pic,
          }),
        }
      );

      if (!response.ok) {
        Toast({
          title: response.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
      if (response.ok) {
        Toast({
          title: "category is Added",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      Toast({
        title: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="container content">
        <div className="Dash_middle">
          <div className="mid_box">
            {" "}
            <form class="form" onSubmit={handle_submit}>
              <p class="title">Add Category </p>
              <p class="message">As an Admin you have full access </p>
              <label>
                <input
                  class="input"
                  type="text"
                  placeholder="Category_Name"
                  required
                  value={catagory_Name}
                  onChange={(e) => {
                    setcatagory_Name(e.target.value);
                  }}
                />
              </label>

              <label>
                <textarea
                  class="input"
                  type="text"
                  placeholder="description"
                  required
                  value={cat_description}
                  onChange={(e) => {
                    setcat_description(e.target.value);
                  }}
                />
              </label>
              <label>
                <input
                  class="input"
                  type="file"
                  onChange={(e) => handle_uploade(e.target.files[0])}
                />
              </label>
              {!PicLoading && (
                <button className="submit" type="submit">
                  Add category
                </button>
              )}
              {PicLoading && (
                <button className="submit" disabled type="submit">
                  <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              )}
              {/* {error && <div className="error">{error}</div>} */}
            </form>
          </div>
          <div className="mid_box">
            <div class="cplx-header">
              <h1>Welcome, Admin!</h1>
            </div>
            <div class="cplx-container">
              <div class="cplx-admin-panel">
                <div class="cplx-icon">
                  <i class="fas fa-users-cog"></i>
                </div>
                <div class="cplx-info">
                  <h2>Admin Dashboard</h2>
                  <p>
                    As an admin, you have the important role of managing users,
                    settings, and maintaining the system's functionality and
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashborad;
