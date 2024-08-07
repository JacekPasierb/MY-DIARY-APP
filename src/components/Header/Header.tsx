import React from "react";
import { Background } from "./Header.styled";

const Header = () => {
  return (
    <Background>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>My Diary</h1> <div>Logo</div>
      </div>
      <div>Formularz Logowania</div>
    </Background>
  );
};

export default Header;
