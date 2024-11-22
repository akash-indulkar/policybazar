import { combineReducers, createStore } from "redux";

import { applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { getAllTypeReducers } from "./reducers/typeReducer";
import { getAllTypeReducers1 } from "./reducers/typeReducer";
import { registerUserReducer,loginUserReducer} from "./reducers/userReducer";


const finalReducer = combineReducers({
registerUserReducer:registerUserReducer,
loginUserReducer:loginUserReducer,
getAllTypeReducers:getAllTypeReducers,
getAllTypeReducers1:getAllTypeReducers1
});


const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];

const initialState = {
  loginUserReducer:{
    currentUser:currentUser
  }
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
console.log(store)
export default store;
