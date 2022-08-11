import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.mainheader}>
      <div className={classes.wordLogo}>TERRA</div>
    </header>
  );
}

export default Header;
