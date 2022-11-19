const ADD_FRIEND = "ADD-FRIEND";
const REMOVE_FRIEND = "REMOVE-FRIEND";
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"

let initialState = {
  users: [
    {
      "name": "SuiQRim",
      "id": 26726,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "Kas",
      "id": 26725,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "bertkek",
      "id": 26724,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "asekon",
      "id": 26723,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "koteyka12",
      "id": 26722,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "foxontheerun",
      "id": 26721,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "wwww",
      "id": 26720,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "www",
      "id": 26719,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "skeling",
      "id": 26718,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    },
    {
      "name": "olya32",
      "id": 26717,
      "uniqueUrlName": null,
      "photos": {
        "small": null,
        "large": null
      },
      "status": null,
      "followed": false
    }
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    case REMOVE_FRIEND:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount }
    default: return state;
  }
}

export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId });
export const removeFriendAC = (userId) => ({ type: REMOVE_FRIEND, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount });

export default usersReducer;