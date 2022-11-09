import style from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Friends from './friends/Friends';


const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.item}>
        <NavLink to="/profile">
          Profile
        </NavLink>{" "}
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs">
          Dialogs
        </NavLink>{" "}
      </div>
      <div className={style.item}>
        <NavLink to="/news">
          News
        </NavLink>{" "}
      </div>
      <div className={style.item}>
        <NavLink to="/music">
          Music
        </NavLink>{" "}
      </div>
      <div className={style.item}>
        <NavLink to="/settings">
          Settings
        </NavLink>{" "}
      </div>
      <div className={style.friends}>
        <Friends />
      </div>
    </div>
  );
};

export default Navbar;
