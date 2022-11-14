import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer"
import  { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
    posts: state.profileReducer
.posts,
newPostText: state.profileReducer
.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer   = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
