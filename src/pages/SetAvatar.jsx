import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Loading from "../assets/loading.gif";
import { setAvatarRoute } from "../utils/APIRoutes";
import { Buffer } from "buffer";

function SetAvatar() {
  // open source, free, pass any random numbers at the end and it will generate random avatars
  const api = "https://api.multiavatar.com/123456";
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  // While the avatars are loading, display the loading gif
  const [isLoading, setisLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  // toast allows an error message along with a second optional object of styling/functional options
  const toastOptions = {
    position: "bottom-left",
    // autoClose in milliseconds
    autoClose: 7000,
    pauseOnHover: true,
    draggable: true,
  };

  //   async function setProfilePicture(){};

  useEffect(() => {
    async function fetchData() {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
      }
      setAvatars(data);
      setisLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <div className="title-container">
          <h1>Please pick an avaar to set as your profile icon!</h1>
        </div>
        <div className="avatars">
          {avatars.map((avatar, index) => {
            return (
              <div
                key={index}
                className={`avatar ${
                  selectedAvatar === index ? "selected" : ""
                }`}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt="avatar"
                  onClick={() => setSelectedAvatar(index)}
                />
              </div>
            );
          })}
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;

export default SetAvatar;
