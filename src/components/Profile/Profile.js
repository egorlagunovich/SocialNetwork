import React from "react";
import MyPosts from "./../MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Wallpaper = (props) => {
  return (
    <div className={styles.wallpaper}>
      <img src={props.photo} alt={props.alt} />
    </div>
  );
};

const Avatar = (props) => {
  return (
    <div>
      <img src={props.ava} alt={props.alt} />
    </div>
  );
};

const Information = (props) => {
  return (
    <div className={styles.description}>
      <h2> {props.name}</h2>
      <ul className={styles.info}>
        <li>Data of Bitrh: {props.birth}</li>
        <li>City: {props.city} </li>
        <li>Education: {props.education} </li>
        <li>Web Site: {props.website} </li>
      </ul>
    </div>
  );
};

const Profile = (props) => {
  return (
    <main className={styles.main}>
      <Wallpaper
        photo="https://www.pbs.org/wnet/nature/files/2021/01/pexels-denis-linine-714258.png"
        alt="Snow mountains"
      />

      <div className={styles.profile}>
        <Avatar
          ava="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          alt="imglogo"
        />
        <Information
          name="Jurek L."
          birth="6 September"
          city="Toruń"
          education="UMK"
          website="github.com/egorlagunovich"
        />
      </div>
      <MyPosts postsData={props.postsData} />
    </main>
  );
};

export default Profile;
