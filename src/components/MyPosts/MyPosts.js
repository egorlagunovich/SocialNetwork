import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postsElements = props.state.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();
  const addPost = () =>{
    let text = newPostElement.current.value;
    alert(text)
    }

  return (
    <div className={styles.myPosts}>
      My Posts
      <div className={styles.newPost}>
        <textarea placeholder="Write twit.." ref={newPostElement}></textarea>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
