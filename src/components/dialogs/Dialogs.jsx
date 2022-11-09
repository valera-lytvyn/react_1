import style from "./Dialogs.module.scss";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((item) => (
    <DialogItem name={item.name} id={item.id} />
  ));
  let messagesElements = props.state.messages.map((item) => (
    <Message message={item.message} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
