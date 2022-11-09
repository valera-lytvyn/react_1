import { NavLink } from "react-router-dom";
import style from './DialogItem.module.scss'

const DialogItem = (props) => {
  let path = "/dialogs/"; // + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}> {props.name}</NavLink>
    </div>
  );
};

export default DialogItem;