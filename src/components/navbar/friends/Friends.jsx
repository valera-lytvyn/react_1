import style from './Friends.module.scss';
import Logo from './logo/Logo';

const Friends = (props) => {
   return (
      <div>
         <div className={style.friendsTitle}>
            Friennds
         </div>
         <div className={style.friendsLogo}>
        
               <Logo />
               <Logo />
               <Logo />

         </div>
      </div>
   )
}
export default Friends;