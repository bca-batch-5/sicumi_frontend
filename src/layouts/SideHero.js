import React from "react";

const SideHero = () => {
  return (
    <div className="side">
      <h1 className="side__title">Sicumi</h1>
      <img
        className="side__img"
        src={require("../assets/side-img.png")}
        alt="side image sicumi"
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
