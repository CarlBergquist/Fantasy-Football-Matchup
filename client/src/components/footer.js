import React from "react";
import "../style/footer.css";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <h5>Created by: </h5>
      <ul>
        <Link to="https://github.com/JackWarrick">Jack Warrick</Link>
        <Link href="https://github.com/CarlBergquist">Carl Bergquist</Link>
        <Link href="https://github.com/cooper2016">Harrison Cooper</Link>
      </ul>
    </div>
  );
}

export default Footer;
