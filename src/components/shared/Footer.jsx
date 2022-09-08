import React from "react";
import "./footer.css";

const Footer = ({ handleBlackMode,blackMode }) => {
  return (
    <div className={`footer ${blackMode=='off'? 'header-ligth':'header-black'}`}>
      <div className={`handle-black-mode ${blackMode=='off'? 'black-mode-off':'ligt-mode-on'}`}>
        <div className={`circle ${blackMode=='off'? 'ligth-circle':'black-circle'}`} onClick={handleBlackMode}></div>
      </div>
    </div>
  );
};

export default Footer;
