import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postsElements = props.state.postsData.map((post) => (
    <div className={styles.mypost}>
      <Post message={post.message} likesCount={post.likesCount} />
    </div>
  ));

  let newPostElement = React.createRef();
  const addPost = () => {
    props.addPosts();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.myPosts}>
      <h1>My Posts</h1>
      <div className={styles.newPost}>
        <textarea
          placeholder="Write twit.."
          ref={newPostElement}
          onChange={onPostChange}
          value={props.state.newPostText}
        ></textarea>
        <button onClick={addPost}>Add Post</button>
        <button>Remove</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
