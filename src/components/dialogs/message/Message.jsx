import style from "./Message.module.scss";
const Message = (props) => {
  return <div className={style.message}> {props.message}</div>;
};

export default Message;
