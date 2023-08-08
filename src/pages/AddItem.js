import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { UseAuthContext } from "../hooks/useAuthContext";
import Usefetch from "../hooks/useGet";
import "./styles.css";
import { Link } from "react-router-dom";
// import Catagory from "../components/Catagory";

const AddItem = () => {
  const api = "http://localhost:8000/ip/cat/allcat";
  const { data } = Usefetch(api);
  const Category = data.cats;

  const Toast = useToast();
  const { user } = UseAuthContext();
  const [Item_Images, seItem_Images] = useState(null);
  const [Item_Name, setItem_Name] = useState("");
  const [Item_Description, setItem_Description] = useState("");
  const [Item_Brand, setItem_Brand] = useState("");
  const [Item_Category, setItem_Category] = useState("");
  const [Item_Price, setItem_Price] = useState("");
  const [Item_poster, setItem_poster] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [PicLoading, setPicLoading] = useState(false);
  const token = user.token;

  const handle_submit = async (e) => {
    e.preventDefault();
    console.log(
      Item_Name,
      Item_Description,
      Item_Brand,
      Item_Price,
      Item_Images,
      Item_Category,
      Item_poster
    );
    setIsLoading(true);
    const userID = user.id;
    setItem_poster(userID);
    if (
      !Item_Name ||
      !Item_Description ||
      !Item_Brand ||
      !Item_Price ||
      !Item_Images ||
      !Item_Category ||
      !Item_poster
    ) {
      Toast({
        title: "fill all the space",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setIsLoading(false);
    }
    try {
      const response = await fetch("http://localhost:8000/ip/item/newitems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `beared ${token}`,
        },
        body: JSON.stringify({
          Item_Name,
          Item_Description,
          Item_Brand,
          Item_Price,
          Item_Images,
          Item_Category,
          Item_poster,
        }),
      });

      if (!response.ok) {
        setIsLoading(false);
        Toast({
          title: "Post ADS in failed",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setIsLoading(false);
      }
      if (response.ok) {
        setIsLoading(false);
        Toast({
          title: "Post is Added",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setIsLoading(false);
      }
    } catch (error) {
      Toast({
        title: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setIsLoading(false);
    }
  };
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
          seItem_Images(data.url.toString());

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
  return (
    <div>
      <Navbar />
      <div className="container content">
        <form class="form" onSubmit={handle_submit}>
          <p class="title">Post Item </p>
          <p class="message">You Can Add Any Item to Gebeyachn. </p>
          <div class="flex">
            <label>
              <input
                class="input"
                type="text"
                placeholder="Item Name"
                required
                value={Item_Name}
                onChange={(e) => {
                  setItem_Name(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                class="input"
                type="number"
                placeholder="Price"
                required
                value={Item_Price}
                onChange={(e) => {
                  setItem_Price(e.target.value);
                }}
              />
            </label>
          </div>
          <label>
            <textarea
              class="input"
              type="text"
              placeholder="Item Description"
              required
              value={Item_Description}
              onChange={(e) => {
                setItem_Description(e.target.value);
              }}
            />
            {/* <span>Email</span> */}
          </label>
          <label>
            <input
              class="input"
              type="text"
              placeholder="Item Brand"
              required
              value={Item_Brand}
              onChange={(e) => {
                setItem_Brand(e.target.value);
              }}
            />
          </label>
          {Category && (
            <div className="input-group mb-2">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Category
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={(e) => setItem_Category(e.target.value)}
              >
                <option defaultValue></option>
                {Category.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.catagory_Name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <label>
            <input
              class="input"
              type="file"
              placeholder="Item Image"
              onChange={(e) => handle_uploade(e.target.files[0])}
            />
          </label>

          {!PicLoading && (
            <button className="submit" type="submit">
              Add Post
            </button>
          )}
          {PicLoading && (
            <button className="submit" disabled type="submit">
              <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          )}

          <p class="signin">
            <Link to="/">GO Home</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddItem;
