const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY: {
         return {
            ...state,
            newMessageBody: action.body,
         }
      }
      case SEND_MESSAGE: {
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }],
         }
      }
      default:
         return state;
   }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;