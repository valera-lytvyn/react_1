import React from "react";
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer"

const MyPostsContainer = (props) => {
  let state = props.store.getState();
console.log(state)
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {

    let action = updateNewPostActionCreator(text);
    props.store.dispatch(action);
  };
  
  
  return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
    posts={state.profileReducer.posts} newPostText={state.profileReducer.newPostText}/>)
     
}

export default MyPostsContainer;
