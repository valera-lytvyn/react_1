import profileReduser from "./profileReducer";
import dialogsReduser from "./dialogsReducer";
// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hi, how are you?", likesCount: 0 },
        { id: 2, message: "hello", likesCount: 4 },
        { id: 3, message: "It's my first post", likesCount: 4 },
        { id: 4, message: "Olya It's my first post", likesCount: 8 },
        { id: 5, message: "yo", likesCount: 10 },
      ],
      newPostText: "dsk",
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "hello" },
        { id: 3, message: "Hi" },
        { id: 4, message: "Olya" },
        { id: 5, message: "yo" },
        { id: 5, message: "yo-yo" },
      ],
      dialogs: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Pasha" },
        { id: 3, name: "Kolya" },
        { id: 4, name: "Olya" },
        { id: 5, name: "Maks" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("rerend");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._state._callSubscriber = observer;
  },



  dispatch(action) {
    this.profilePage = profileReduser(this._state.profilePage, action);
    this.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = "";
    //   this._state._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._state._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogsPage.newMessageBody = action.body;
    //   this._state._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = this._state.dialogsPage.newMessageBody;
    //   this._state.dialogsPage.messages.push({ id: 6, message: body },);
    //     this._state.dialogsPage.newMessageBody = '';
    //   this._state._callSubscriber(this._state);
    // }

  },
};

// export const addPostActionCreator = () => ({ type: ADD_POST });
// export const updateNewPostActionCreator = (text) =>
//   ({ type: UPDATE_NEW_POST_TEXT, newText: text })

// export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
// export const updateNewMessageBodyCreator = (body) =>
//   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
