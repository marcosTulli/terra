import React from "react";
import classes from "./Hero.module.scss";
import logo from "../../../assets/logo.jpeg";

function Hero() {
  return (
    <div className={classes.heroContainer}>
      <img className={classes.logo} src={logo} alt="logo" />
    </div>
  );
}

export default Hero;
