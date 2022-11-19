import style from './Users.module.scss';
import React from 'react';
import userAva from './../../img/userAvatar.png';

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (<div className={style.users}>
      <div>
         {pages.map(p => {
            return (
               <span className={props.currentPage === p && style.selectedPage}
                  onClick={() => {
                     console.log(p);
                     props.onPageChange(p);
                  }}> {p} </span>
            )
         })
         }
      </div>
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