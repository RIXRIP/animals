import {animalsAPI, usersAPI} from "../api/api";

const SET_PERSONAL_DATA = "SET_PERSONAL_DATA";
const SET_PERSONAL_PROFILE_ANIMALS = "SET_PERSONAL_PROFILE_ANIMALS"

const initialState = {
    data: {
        user: {
            id: null,
            email: '',
        },
        token: null
    },
    userCurrentAnimals: [],

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSONAL_DATA:
            return {
                ...state,
                data: {
                    user: {
                        id: action.data.user.id,
                        email: action.data.user.email
                    },
                    token: action.data.accessToken
                }
            }

        case SET_PERSONAL_PROFILE_ANIMALS: {

            return {
                ...state,
                userCurrentAnimals: action.userCurrentAnimals
            }
        }

        default:
            return state
    }

}

export const setPersonalProfileAnimals = (userCurrentAnimals) => {
    return {type: SET_PERSONAL_PROFILE_ANIMALS, userCurrentAnimals}
}
export const setPersonalData = (data) => {
    return {type: SET_PERSONAL_DATA, data}
}
///thunks
export const setPersonalTC = (newUser) => {
    return (dispatch) => {
        usersAPI.loginUser(newUser).then((data) => {
            dispatch(setPersonalData(data))
            localStorage.setItem('user', JSON.stringify({
                user: {id: data.user.id, email: data.user.email},
                accessToken: data.accessToken
            }))
        })
    }
}
export const getPersonalAnimalsTC = (userID) => {
    return (dispatch) => {
        animalsAPI.getPersonalAnimals(userID).then(data => {
            dispatch(setPersonalProfileAnimals(data));
        });
    }
}

export const deleteAnimalTC = (id, totalAnimals) => {
    return (dispatch) => {
        animalsAPI.deleteAnimal(id).then(data => {
            dispatch(setPersonalProfileAnimals(data));
        })
        animalsAPI.getTotalCount().then(data => {
            animalsAPI.postTotalCount((totalAnimals - 1), (data.usersCount))
        })
    }
}
export const registerUserTC = (newUser) => {
    return (dispatch) => {
        animalsAPI.getTotalCount().then(data => {
            animalsAPI.postTotalCount((data.animalsCount), (data.usersCount+1))
        })

        usersAPI.registerUser(newUser)
            .then((data) => {
                dispatch(setPersonalData(data));
                localStorage.setItem('user', JSON.stringify({
                    user: {
                        id: data.user.id,
                        email: data.user.email
                    }, accessToken: data.accessToken
                }))
            })
    }
}

export default authReducer