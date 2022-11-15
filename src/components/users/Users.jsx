import style from './Users.module.scss';
// import UsersContainer from './UsersContainer';
import React from 'react';

const Users = (props) => {
   
   if (props.users.length === 0) {
      props.setUsers(
      [
         {
            id: 1, photoUrl: "https://cdn-icons-png.flaticon.com/128/5953/5953843.png",
            friend: false, userName: "Oleg", userStatus: "hi, how are you?", location: { country: "Ukraine", city: "Odesa" }
         },
         {
            id: 2, photoUrl: "https://cdn-icons-png.flaticon.com/128/5953/5953843.png",
            friend: true, userName: "Igor", userStatus: "I'm superstar", location: { country: "Ukraine", city: "Lviv" }
         },
         {
            id: 3, photoUrl: "https://cdn-icons-png.flaticon.com/128/5953/5953843.png",
            friend: false, userName: "Pasha", userStatus: "hello, are you here?", location: { country: "Ukraine", city: "Kyiv" }
         },
         {
            id: 3, photoUrl: "https://cdn-icons-png.flaticon.com/128/5953/5953843.png",
            friend: true, userName: "Galia", userStatus: "yo-yo bro", location: { country: "Ukraine", city: "Ivano - Frankivsk" }
         },
      ]
   )
   }
   
   return (
      <div className={style.users}>
         {
            props.users.map(u =>
               <div key={u.id}>
                  <span>
                     <div>
                        <img src={u.photoUrl} alt="avatar" />
                     </div>
                     <div>
                        {u.friend
                           ? <button onClick={() => { props.removeFriend(u.id)}}>unfollow</button>
                           : <button onClick={() => { props.addFriend(u.id)}}>follow</button>}
                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{u.userName}</div>
                        <div> {u.userStatus}</div>
                     </span>
                     <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                     </span>
                  </span>
               </div>
            )
         }
      </div>
   )
}

export default Users;