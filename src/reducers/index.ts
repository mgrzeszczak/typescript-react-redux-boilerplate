import { combineReducers } from "redux";
import { getNameReducer, NameData } from "./getNameReducer";

export interface AppState {
    nameData: NameData;
}

const rootReducer = combineReducers(
    { nameData: getNameReducer }
);

export default rootReducer;
