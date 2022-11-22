import style from './Header.module.scss';
import logo from './../../img/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (

      <div className={style.header}>
       
         <img src={logo} alt="logo" />
         <div className={style.name}>NAME</div>
                  <div className="login">
            
            {props.isAuth ?
               props.login :
               <NavLink to='/login' >{'login'}</NavLink>
            }
         </div>
      </div>
   )
}
export default Header;