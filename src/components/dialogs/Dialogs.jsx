import style from "./Dialogs.module.scss";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/state';



const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map((item) => (
    <DialogItem name={item.name} id={item.id} />
  ));
  let messagesElements = state.messages.map((item) => (
    <Message message={item.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
     props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
