import { connect } from "react-redux";
import { addFriendAC, removeFriendAC, setUsersAC } from "./../../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state) => {
  return {
      users: state.usersReducer.users
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


