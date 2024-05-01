import { combineReducers } from "redux";
import toggleDarkModeReducer from "./darkModeReducer";

const reducers = combineReducers({
    darkMode: toggleDarkModeReducer
});

export default reducers;