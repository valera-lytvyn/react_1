import React from 'react';
import { connect } from "react-redux";
import {
   addFriendAC, removeFriendAC, setUsersAC,
   setCurrentPageAC, setTotalUsersCountAC, ToggleIsFetchingAC
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

let mapDispatchToProps = (dispatch) => {
   return {
      addFriend: (userId) => {
         dispatch(addFriendAC(userId))
      },
      removeFriend: (userId) => {
         dispatch(removeFriendAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalUsersCountAC(totalCount))
      },
      toggleIsFetching: (isFetching) => {
         dispatch(ToggleIsFetchingAC(isFetching))
      }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


