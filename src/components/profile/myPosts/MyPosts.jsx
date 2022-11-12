import style from "./MyPosts.module.scss";
import Post from "./post/Post";
import React from "react";


const MyPosts = (props) => {
 
    let postsElements = props.posts.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  

  let onPostChange = () => {
        let text = newPostElement.current.value;
    props.updateNewPostText(text);
      };

  return (
    <div className={style.myPosts}>
      My posts
      <div className={style.wrapTextarea}>
        <textarea
          className={style.textarea}
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={onAddPost} className={style.button}>
          Add post
        </button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
