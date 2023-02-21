import dataAboutAnimalReducer from "./about-animal-reducer";
import adsDataReducer from "./ads-data-reducer";

let store = {
        _state: {
                mainPage: {
                        adsData: [
                                { id: 1, name: "Вася" },
                                { id: 2, name: "Тузик" },
                                { id: 3, name: "Кира" },
                                { id: 4, name: "Л" },
                                { id: 5, name: "Капитан Ямато" }],
                        newAdsText:"Animal"
                },


                aboutAnimalPage: {
                        dataAboutAnimal: {
                                id: "",
                                name: "",
                        }

                }
        },
        _callSubscriber() {
                console.log("Перерендер")
        },
        getState() {
                return this._state
        },

        subscribe(observer) {
                this._callSubscriber = observer;
        },

        dispatch(action) {
                this._state.mainPage = adsDataReducer(this._state.mainPage, action)
                this._state.dataAboutAnimal = dataAboutAnimalReducer(this._state.aboutAnimalPage, action)
                this._callSubscriber(this._state);
        }
}


export default store