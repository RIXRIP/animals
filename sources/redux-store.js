import { combineReducers, legacy_createStore } from "redux";
import dataAboutAnimalReducer from "./about-animal-reducer";
import animalsDataReducer from "./ads-data-reducer";
import adsUserReducer from "./ads-user-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    animalsData: animalsDataReducer,
    dataAboutAnimal: dataAboutAnimalReducer,
    usersData: adsUserReducer,
    auth: authReducer
});
let store = legacy_createStore(reducers);
window.store = store;
export default store;