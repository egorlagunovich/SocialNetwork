import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      {props.message}
      <div className={styles.likes}>{props.likesCount + " Likes"}</div>
    </div>
  );
};

export default Post;
