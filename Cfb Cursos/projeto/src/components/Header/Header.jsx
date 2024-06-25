import React from "react";
import "../Header/Header.css";
import logo from "../../assets/images/logo.jpg";
import Contacts from "./../../pages/Contatcs/Contatcts";
import About from "../../pages/About/About";
import History from "../../pages/History/History";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="pages">
          <Contacts />
          <About />
          <History />
        </div>
      </div>
    </>
  );
};

export default Header;
