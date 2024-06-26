import React from "react";
import styles from './../header/Header.module.css'
import logo from './../../assets/images/nasa_logo.png'
import Contacts from './../contacts/Contacts';
import About from './../../pages/about/About';
import History from "../../pages/history/History";

const Header = () => {
  return (
    <>
      <div className={styles.component}>
       <div> <img src={logo} alt="logo" className={styles.logo} /></div>
        <div className={styles.pages}>
          <Contacts />
          <About />
          <History />
        </div>
      </div>
    </>
  );
};

export default Header;