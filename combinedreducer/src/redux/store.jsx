import { countReducer } from "./reducer";
import {  legacy_createStore } from "redux";
export const store = legacy_createStore(countReducer);