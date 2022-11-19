import { connect } from "react-redux";
import {
   addFriendAC, removeFriendAC, setUsersAC,
   setCurrentPageAC, setTotalUsersCountAC
} from "./../../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state) => {
  return {
     users: state.usersReducer.users,
     pageSize: state.usersReducer.pageSize,
     totalUsersCount: state.usersReducer.totalUsersCount,
     currentPage: state.usersReducer.currentPage,
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
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);


