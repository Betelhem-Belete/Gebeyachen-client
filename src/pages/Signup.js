import React from "react";
import "./login.css";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function Signup() {
  const Toast = useToast();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [pic, setPic] = useState(null);
  const [PicLoading, setPicLoading] = useState(false);
  const { signup, error } = useSignup();

  const handle_submit = async (e) => {
    console.log(Email, password, Name, Phone, Address, pic);
    e.preventDefault();
    setPicLoading(true);
    if (!Email || !password || !Name || !Phone || !Address) {
      Toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    await signup(Email, password, Name, Phone, Address, pic);
    if (error) {
      Toast({
        title: error.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
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
  return (
    <React.Fragment>
      <div className="containers_login">
        <form class="form" onSubmit={handle_submit}>
          <p class="title">Register </p>
          <p class="message">Signup now and get full access to our app. </p>
          <div class="flex">
            <label>
              <input
                class="input"
                type="text"
                placeholder="Name"
                required
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label>
              <input
                class="input"
                type="number"
                placeholder="Phone Number"
                required
                value={Phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </label>
          </div>
          <label>
            <input
              class="input"
              type="email"
              placeholder="Email"
              required
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <span>Email</span> */}
          </label>
          <label>
            <input
              class="input"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <span>Password</span> */}
          </label>
          <label>
            <input
              class="input"
              type="text"
              placeholder="Address"
              required
              value={Address}
              onChange={(e) => {
                setAddress(e.target.value);
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
              Submit
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
            Already have an acount ? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Signup;
