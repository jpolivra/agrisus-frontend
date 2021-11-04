import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <div className="footer-placeholder">
      <h1>
        desenvolvido pela{" "}
        <Link>
          <span>equipe 5</span>
        </Link>
      </h1>
    </div>
  );
}

export default Footer;
