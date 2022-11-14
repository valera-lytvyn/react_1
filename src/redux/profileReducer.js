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
      case ADD_POST: {
         // let newPost = {
         //    id: 5,
         //    message: state.newPostText,
         //    likesCount: 0,
         // };
         return {
            ...state,
            newPostText: "",
            posts: [...state.posts, {
               id: 5,
               message: state.newPostText,
               likesCount: 0,
            }]
         };
         // stateCopy.posts = [...state.posts];
         // stateCopy.posts.push(newPost);
         // stateCopy.newPostText = "";
         // return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         };
         // stateCopy.newPostText = action.newText;
      }
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReduser;