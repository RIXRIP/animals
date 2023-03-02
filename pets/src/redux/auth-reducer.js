const SET_PERSONAL_DATA = "SET_PERSONAL_DATA";
const SET_PERSONAL_PROFILE_ANIMALS = "SET_PERSONAL_PROFILE_ANIMALS"

const initialState = {
    data: {
        user:{
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
                    user:{ id: action.data.user.id,
                        email: action.data.user.email},
                    token: action.data.accessToken
                }
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

export const setPersonalProfileAnimals = (userCurrentAnimals) => {
    return { type: SET_PERSONAL_PROFILE_ANIMALS, userCurrentAnimals }
}
export const setPersonalData = (data) => {
    return {type: SET_PERSONAL_DATA, data}
}

export default authReducer