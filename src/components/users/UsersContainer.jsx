import React from 'react';
import { connect } from "react-redux";
import {
   addFriend, removeFriend, setUsers,
   setCurrentPage, setTotalUsersCount, toggleIsFetching
} from "./../../redux/usersReducer";
import axios from 'axios';
import Users from './Users';
import style from './UsersContainer.module.scss';
import Preloader from '../common/preloader/Preloader';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         })
   }

   onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
         })
   }


   render() {

      return (
         <div className={style.UsersContainer} >
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
               onPageChange={this.onPageChange}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               removeFriend={this.props.removeFriend}
               addFriend={this.props.addFriend}
            />
         </div>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersReducer.users,
      pageSize: state.usersReducer.pageSize,
      totalUsersCount: state.usersReducer.totalUsersCount,
      currentPage: state.usersReducer.currentPage,
      isFetching: state.usersReducer.isFetching,
   }
};

// let mapDispatchToProps = (dispatch) => {
//    return {
//       addFriend: (userId) => {
//          dispatch(addFriend(userId))
//       },
//       removeFriend: (userId) => {
//          dispatch(removeFriend(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsers(users))
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPage(pageNumber))
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(setTotalUsersCount(totalCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(ToggleIsFetching(isFetching))
//       }
//    }
// };

export default connect(mapStateToProps, {
   addFriend,
   removeFriend,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
})(UsersContainer);


