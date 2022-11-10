import style from "./MyPosts.module.scss";
import Post from "./post/Post";
import React from "react";
import { addPostActionCreator } from "./../../../redux/state"
import { updateNewPostActionCreator } from "./../../../redux/state"


const MyPosts = (props) => {
  let postsElements = props.state.posts.map((item) => (
    <Post message={item.message} likesCount={item.likesCount} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  let onPostCange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={style.myPosts}>
      My posts
      <div className={style.wrapTextarea}>
        <textarea
          className={style.textarea}
          onChange={onPostCange}
          ref={newPostElement}
          value={props.state.newPostText}
        />
        <button onClick={addPost} className={style.button}>
          Add post
        </button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
