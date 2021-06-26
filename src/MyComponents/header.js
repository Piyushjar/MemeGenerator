import React from "react";
import funny from "../funny.png";

function Header() {
  return (
    <h1>
      <header>
        <img src={funny} alt="problem?" />
        <p>Meme Maker</p>
      </header>
    </h1>
  );
}

export default Header;
