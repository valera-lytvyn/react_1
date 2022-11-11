const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: "hi, how are you?", likesCount: 0 },
      { id: 2, message: "hello", likesCount: 4 },
      { id: 3, message: "It's my first post", likesCount: 4 },
      { id: 4, message: "Olya It's my first post", likesCount: 8 },
      { id: 5, message: "yo", likesCount: 10 },
   ],
   newPostText: "dsk",
};

const profileReduser = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: 
         let newPost ={ 
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         };
         state.posts.push(newPost);
         state.newPostText = "";
         return state;
      
      case UPDATE_NEW_POST_TEXT: 
         state.newPostText = action.newText;
         
         return state;
      default:
         return state;
   }
}
 
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReduser;