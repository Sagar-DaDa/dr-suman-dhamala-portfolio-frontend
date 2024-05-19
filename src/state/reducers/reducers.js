import { combineReducers } from "redux";
import toggleDarkModeReducer from "./darkModeReducer";
import showPageLoaderReducer from "./showPageLoaderReducer";

const reducers = combineReducers({
    darkMode: toggleDarkModeReducer,
    pageLoader: showPageLoaderReducer
});

export default reducers;