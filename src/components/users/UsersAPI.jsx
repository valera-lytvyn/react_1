import React from 'react';
import axios from 'axios';
import Users from './Users'

class UsersAPI extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         })
   }

   onPageChange = (pageNumber) => {
            this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }


   render() {


      return (
         <Users totalUsersCount={this.props.totalUsersCount}
            onPageChange={this.onPageChange}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            removeFriend={this.props.removeFriend}
            addFriend={this.props.addFriend}
         />
      )
   }
}

export default UsersAPI;