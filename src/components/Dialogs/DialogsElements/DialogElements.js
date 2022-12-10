import React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path} className={styles.dialog}>
        <div className={styles.dialogInfo}>
        <div>
          <img src={props.photo} alt="avatar" />
        </div>
        <div>{props.name}</div>
        </div>
      </NavLink>
      </div>
   
  );
};

export default Dialog;
