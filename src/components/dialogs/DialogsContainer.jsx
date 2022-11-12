import React from "react";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  let state = props.store.getState();
  let onSendMessageClick = () => {
     props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (body) => {
     props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}
    dialogs={state.dialogsReducer.dialogs} messages={state.dialogsReducer.messages} newMessageBody={state.dialogsReducer.newMessageBody}/>
  );
};


export default DialogsContainer;
