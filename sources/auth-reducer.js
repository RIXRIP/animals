const SET_PERSONAL_DATA = "SET_PERSONAL_DATA";
const SET_PERSONAL_PROFILE_ANIMALS = "SET_PERSONAL_PROFILE_ANIMALS"

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    userCurrentAnimals: []
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSONAL_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
    }
        case SET_PERSONAL_PROFILE_ANIMALS:{
            return {
                ...state,
                userCurrentAnimals: action.userCurrentAnimals
            }
        }
default:
    return state
}

}
export const setPersonalData = (id,email,login) => {
    return {type: SET_PERSONAL_DATA, data:{id,email,login}}
}
export const setPersonalProfileAnimals = (userCurrentAnimals) => {
    return { type: SET_PERSONAL_PROFILE_ANIMALS, userCurrentAnimals }
}

export default authReducer