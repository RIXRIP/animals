import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3005/',

})

export const animalsAPI = {
    ///get
    getAnimals(currentPage = 1, pageSize = 4) {
        return instance.get(`animals?_page=${currentPage}&_limit=${pageSize}`).then(response => {
            return response.data
        });
    },
    getTotalCount() {
        return instance.get(`dataTotalCount`).then(response => {
            return response.data
        });
    },
    getPersonalAnimals(id){
        return instance.get(`animals?userID=`+ id).then(response => {
            return response.data
        });
    },


    ///post

    postTotalCount(animalsCount, usersCount) {
        return instance.post(`dataTotalCount`, {animalsCount, usersCount}).then(response => {
            return response.data
        });
    },
    postNewAnimal(name, species, breed, animalPhoto, userID, description) {
        return instance.post(`animals`, {name, species, breed, animalPhoto, userID, description});
    },
    ///delete
    deleteAnimal(id) {
        return instance.delete(`animals/` + id).then(response => {
            return response.data
        });
    }
}

export const usersAPI = {
    ///get
    getUsers() {
        return instance.get("users").then(response => {
            return response.data
        });
    },
    getCurrentUser(id) {
        return instance.get("users/"+id).then(response => {
            return response.data
        });
    },
///post
    registerUser(newUser) {
        return instance.post(`register`, newUser).then(response => {
            return response.data
        })
    },
    loginUser(newUser) {
        return instance.post('login', newUser).then(response => {
                return response.data
            })
    }
}
