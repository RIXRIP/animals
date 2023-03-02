const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS = "SET_USERS";
const SET_USERS_PROFILE_ANIMALS = "SET_USERS_PROFILE_ANIMALS"
const SET_USER_COUNT="SET_USER_COUNT"
const initialState = {
        users: [
        ],
        currentUser:{},
        userCurrentAnimals:[],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,

}
const adsUserReducer = (state = initialState, action) => {
        switch (action.type) {
                case SET_USERS_PROFILE:
                        return {
                                ...state,
                                currentUser: action.currentUser

                        }
                case SET_USERS:
                        return {
                                ...state,
                                users: action.users
                        }
                case SET_USERS_PROFILE_ANIMALS:{
                        return {
                                ...state,
                                userCurrentAnimals: action.userCurrentAnimals
                        }
                }
                case SET_USER_COUNT :{
                        return {
                                ...state,
                                totalUsersCount: action.totalUsersCount
                        }
                }
                default:
                        return state
        }

}
export const setUsersProfile = (currentUser) => {
        return { type: SET_USERS_PROFILE, currentUser }
}
export const setUsers = (users) => {
        return { type: SET_USERS, users }
}
export const setUserCount =(totalUsersCount)=>{
        return { type: SET_USER_COUNT, totalUsersCount }
}
export const setUsersProfileAnimals = (userCurrentAnimals) => {
        return { type: SET_USERS_PROFILE_ANIMALS, userCurrentAnimals }
}

export default adsUserReducer