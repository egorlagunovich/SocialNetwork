import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Friend = (props) => {
  return (
    <div className={styles.friend}>
      <div className={styles.photo}>
        <img src={props.photo} alt="Avatar" />
      </div>
      <div className={styles.name}>{props.name}</div>
    </div>
  );
};

const Navbar = (props) => {
  let friendsElement = props.state.friends.map((friend) => (
    <Friend
      name={friend.name}
      id={friend.id}
      photo={friend.photo}
      className={styles.oneFriend}
    />
  ));
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(navData) =>
              navData.isActive ? styles.active : styles.item
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <h2>My friends</h2>
      <div className={styles.friends}>{friendsElement}</div>
    </nav>
  );
};

export default Navbar;
