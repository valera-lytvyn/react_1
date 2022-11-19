import style from './Users.module.scss';
import React from 'react';
import userAva from './../../img/userAvatar.png';
import axios from 'axios';

class Users extends React.Component {

//    componentDidMount() {
//       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//       .then(response => {
//       this.props.setUsers(response.data.items);
// this.props.setTotalUsersCount(response.data.totalCount);
         
         
//       })
//    }

   onPageChange (pageNumber) {
      this.props.setCurrentPage(pageNumber)
      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      // .then(response => {
      //    this.props.setUsers(response.data.items)
      // })
   }
   render() {
      // debugger;
      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

      return (<div className={style.users}>
         <div>
            {pages.map(p => {
               return (
                  <span className={this.props.currentPage === p && style.selectedPage}
                     onClick={() => {this.onPageChange(p) }}> {p} </span>
               )
            })
            }
         </div>

         {
            this.props.users.map(u =>
               <div key={u.id}>
                  <span>
                     <div>
                        <img src={u.photos.small !== null ? u.photos.small : userAva} alt="avatar" />
                     </div>
                     <div>
                        {u.followed
                           ? <button onClick={() => { this.props.removeFriend(u.id) }}>unfollow</button>
                           : <button onClick={() => { this.props.addFriend(u.id) }}>follow</button>}
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
}
export default Users;