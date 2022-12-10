import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
  return (
    <div className={styles.myPosts}>
      My Posts
      <div className={styles.newPost}>
        <textarea placeholder="Write twit.."></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
