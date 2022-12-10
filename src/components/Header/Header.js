import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXPIKaeb4tThD4BUcUE7zPrnU0QPp6OVQiA&usqp=CAU"
        alt="logo"
      />
    </header>
  );
};

export default Header;
