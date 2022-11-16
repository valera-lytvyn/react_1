import style from './Users.module.scss';
// import UsersContainer from './UsersContainer';
import React from 'react';
import userAva from './../../img/userAvatar.png';
import axios from 'axios';

const Users = (props) => {

   if (props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
         .then(response => {
            props.setUsers(response.data.items)
         })
   }

   return (
      <div className={style.users}>
         {
            props.users.map(u =>
               <div key={u.id}>
                  <span>
                     <div>
                        <img src={u.photos.small !== null ? u.photos.small : userAva} alt="avatar" />
                     </div>
                     <div>
                        {u.followed
                           ? <button onClick={() => { props.removeFriend(u.id) }}>unfollow</button>
                           : <button onClick={() => { props.addFriend(u.id) }}>follow</button>}
                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{u.name}</div>
                        <div> {u.status}</div>
                     </span>
                     <span>
                        <div>'u.location.country'</div>
                        <div>'u.location.city'</div>
                     </span>
                  </span>
               </div>
            )
         }
      </div>
   )
}

export default Users;