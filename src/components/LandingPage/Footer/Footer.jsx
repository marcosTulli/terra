import React from "react";
import classes from "./Footer.module.scss";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerText}>
        <h1>
          Gracias por{" "}
          <span className={classes.blue}>completar el ejercicio</span>
        </h1>
        <h3>Te invitamos ver mas informacion</h3>
      </div>
      <div className={classes.aboutButton}>
        <a rel="noreferrer" href="https://www.wolox.com.ar/" target="_blank">
          <button variant="primary"> Conocer mas</button>
        </a>
      </div>
      <div className={classes.logo}></div>
    </div>
  );
}

export default Footer;
