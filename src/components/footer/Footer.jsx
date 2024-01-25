import React from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/tbc-footer.webp";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const handleClick = () =>{ 
    alert("functionality will be added soon!")
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div>
          <Link to="https://www.facebook.com/tbcbank/"><FaFacebook size={40} className={styles.footerIcon}/></Link>
          <Link to="https://www.youtube.com/channel/UCGk9R2LV2ywOL80r8Xc6xtQ"><FaYoutube size={40} className={styles.footerIcon}/></Link>
        </div>

        <div>
            <button onClick={handleClick}>მოგვწერეთ</button>
        </div>

        <div>
            <p>წესები და პირობები</p>
            <p>&copy; 2023 ყველა უფლება დაცულია</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
