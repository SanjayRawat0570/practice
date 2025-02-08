import { legacy_createStore } from "redux";
import footballReducer from "./Reducers";
export const Store = legacy_createStore(footballReducer);