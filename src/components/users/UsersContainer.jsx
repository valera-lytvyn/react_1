import { connect } from "react-redux";
import { addFriendAC, removeFriendAC, setUsersAC } from "./../../redux/usersReducer";
import Users from "./Usersss";


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
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);


