const ADD_FRIEND = "ADD-FRIEND";
const REMOVE_FRIEND = "REMOVE-FRIEND";
const SET_USERS ="SET-USERS"

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 20,
   currentPage:1,
};

const usersReducer = (state = initialState, action) => {
      switch (action.type) {
      case ADD_FRIEND:
        return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {...u, followed: true}
               }
               return u
            })
         }
      case REMOVE_FRIEND:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {...u, followed: false}
               }
               return u
            })
         }
      case SET_USERS:
         return { ...state, users: [...state.users, ...action.users]}
      default: return state;
   }
}

export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId });
export const removeFriendAC = (userId) => ({ type: REMOVE_FRIEND, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;