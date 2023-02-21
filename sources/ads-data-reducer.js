const ADD_TEXT = "ADD_TEXT";
const NEW_ADS_TEXT = "NEW_ADS_TEXT";
const SET_ANIMALS = "SET_ANIMALS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_ANIMALS = "SET_TOTAL_ANIMALS"
const SET_USERS = "SET_USERS"

const initialState = {
        animals: [],
        users: [],
        newPostText: {
                name: "",
                species: "",
                breed: "",
                animalPhoto: "https://kareliya.ru/resources/doc-17195-ph-gallery-17199-original.jpg",
                description: ""
        },
        pageSize: 4,
        totalAnimals: 0,
        currentPage: 1,

}
const animalsDataReducer = (state = initialState, action) => {
        switch (action.type) {
                case ADD_TEXT:
                        let idCounter = state.totalAnimals;
                        idCounter++
                        let add = {
                                id: idCounter,
                                name: action.inputName,
                                species: action.inputSpecies,
                                breed: action.inputBreed,
                                animalPhoto: action.uploadPhoto,
                                description: action.description
                        };

                        return {
                                ...state,
                                totalAnimals: idCounter,
                                animals: [...state.animals, add],
                                newPostText: {
                                        name: "",
                                        species: "",
                                        breed: "",
                                        description: ""
                                }
                        }

                case NEW_ADS_TEXT:

                        return {
                                ...state,
                                newPostText: {
                                        name: action.newText,
                                        species: action.newSpeciesText,
                                        breed: action.newBreedText,
                                }

                        }
                case SET_ANIMALS: {
                        return {

                                ...state,
                                animals: action.animals
                        }
                }
                case SET_CURRENT_PAGE: {
                        return {
                                ...state,
                                currentPage: action.currentPage
                        }
                }
                case SET_TOTAL_ANIMALS: {
                        return {
                                ...state,
                                totalAnimals: action.totalAnimals
                        }
                }
                case SET_USERS: {
                        return {
                                ...state,
                                users: action.users
                        }
                }
                default:
                        return state
        }

}
export const addText = (inputName, inputSpecies, inputBreed, uploadPhoto, description) => {
        return { type: ADD_TEXT, inputName, inputSpecies, inputBreed, uploadPhoto, description }
}
export const updateText = (newText, newSpeciesText, newBreedText, newDescription) => {
        return { type: NEW_ADS_TEXT, newText, newSpeciesText, newBreedText, newDescription }
}
export const setAnimals = (animals) => {
        return { type: SET_ANIMALS, animals }
}
export const setCurrentPage = (currentPage) => {
        return { type: SET_CURRENT_PAGE, currentPage }
}
export const setTotalAnimals = (totalAnimals) => {
        return { type: SET_TOTAL_ANIMALS, totalAnimals }
}
export const setUsers = (users) => {
        return { type: SET_USERS, users }
}
export default animalsDataReducer