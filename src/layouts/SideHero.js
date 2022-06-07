import React from "react";
import { useNavigate } from "react-router-dom";

const SideHero = () => {
  const navigate = useNavigate();

  return (
    <div className="side">
      <h1 className="side__title" onClick={() => navigate("/")}>
        Sicumi
      </h1>
      <img
        className="side__img"
        src={require("../assets/side-img.png")}
        alt="side gambar sicumi"
      />
      <div className="side__sub">The app that can make your life easier</div>
      <p className="side__desc">
        We're here to help you reach your personal goal, The founder are : Iota,
        Farid and Andre &copy; All Right Reserved - 2022
      </p>
    </div>
  );
};

export default SideHero;
