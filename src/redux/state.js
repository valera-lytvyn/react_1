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

    _callSubscriber() {
      console.log("rerend");
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
    },
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._state._callSubscriber = observer;
  },



  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._state._callSubscriber();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._state._callSubscriber();
    }

  },
};

export default store;
