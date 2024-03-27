import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {
  loginReducer,
  registrationReducer,
  changeUserInfoReducer,
  authReducer,
} from "./reducers/authReducers";
import { IInitialState } from "./../types/store";
import { teamReducer } from "./reducers/teamReducers";

import pidrila from "src/assets/images/pidrila.png";
import { adminReducer } from "./reducers/adminReducers";

//Init store
export const initialState: IInitialState = {
  isAuth:  localStorage.getItem("isAuth")
  ? JSON.parse(localStorage.getItem("isAuth"))
  : "false",
  isAdmin: localStorage.getItem("isCurrentUserAdmin")
    ? JSON.parse(localStorage.getItem("isCurrentUserAdmin"))
    : "user",
  user: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : {
        username: "Login",
        name: "Name",
        surname: "Surname",
        password: "hash",
        id: null,
      },
  login: {
    user: null,
    tets: null,
  },
  council: {
    totalMembers: null,
    membersInfo: [
      {
        id: 1,
        fullName: "Ivan Govnoed",
        post: "son of a bitch",
        photo: pidrila,
        additionalInfo: null,
      },
      {
        id: 2,
        fullName: "Ivan Govnoed",
        post: "son of a bitch",
        photo: pidrila,
        additionalInfo:
          "apsd ddddddd ddd dddddddddddd  ddddddddddddd dddddd ddd ddddddd ddddddd dddd apsdddddd  ddddddd dddddd  ddddddddd dddd d dddddddd dddddd dd dddddd ddddddd",
      },
      {
        id: 3,
        fullName: "Ivan Govnoed",
        post: "son of a bitch",
        photo: pidrila,
        additionalInfo:
          "apsd ddddddd ddd dddddddddddd  ddddddddddddd dddddd ddd ddddddd ddddddd dddd apsdddddd  ddddddd dddddd  ddddddddd dddd d dddddddd dddddd dd dddddd ddddddd",
      },
      {
        id: 4,
        fullName: "Ivan Govnoed",
        post: "son of a bitch",
        photo: pidrila,
        additionalInfo:
          "apsd ddddddd ddd dddddddddddd  ddddddddddddd dddddd ddd ddddddd ddddddd dddd apsdddddd  ddddddd dddddd  ddddddddd dddd d dddddddd dddddd dd dddddd ddddddd",
      },
      {
        id: 5,
        fullName: "Ivan Govnoed",
        post: "son of a bitch",
        photo: pidrila,
        additionalInfo:
          "apsd ddddddd ddd dddddddddddd  ddddddddddddd dddddd ddd ddddddd ddddddd dddd apsdddddd  ddddddd dddddd  ddddddddd dddd d dddddddd dddddd dd dddddd ddddddd",
      },
      {
        id: 6,
        fullName: "Ivan Govnoed",
        post: "son of a bitch",
        photo: pidrila,
        additionalInfo:
          "apsd ddddddd ddd dddddddddddd  ddddddddddddd dddddd ddd ddddddd ddddddd dddd apsdddddd  ddddddd dddddd  ddddddddd dddd d dddddddd dddddd dd dddddd ddddddd",
      },
    ],
  },

  // Add other values if needed
};

const rootReducer = combineReducers({
  registrationReducer,
  loginReducer,
  changeUserInfoReducer,
  teamReducer,
  adminReducer,
  authReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
