import { combineReducers } from "@reduxjs/toolkit";
import itemReducer from './item-reducer';

const rootReducer = combineReducers({itemReducer});

export default rootReducer;
