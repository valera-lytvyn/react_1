import style from "./Dialogs.module.scss";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import React from "react";




const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map((item) => (
    <DialogItem name={item.name} id={item.id} key={item.id}/>
  ));
  let messagesElements = props.messages.map((item) => (
    <Message message={item.message} key={item.id} />
  ));
  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
      }
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>

    </div>
  );
};


export default Dialogs;
