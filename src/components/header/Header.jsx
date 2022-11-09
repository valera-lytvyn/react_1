import style from './Header.module.scss';
import logo from './../../img/logo.png';
const Header = () => {
   return (
      <div className={style.header}>
         <img src={logo} alt="logo" />
         <div className={style.name}>NAME</div>
      </div>
   )
}
export default Header;