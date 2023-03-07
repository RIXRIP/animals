const DATA_ANIMAL_PAGE = "DATA-ANIMAL-PAGE";

const initialState = {
    dataAboutAnimal: {
    },
}
const dataAboutAnimalReducer = (state = initialState, action) => {

    switch (action.type) {
        case DATA_ANIMAL_PAGE:
            return {
                dataAboutAnimal:{
                    id : action.idAnimal,
                    name : action.nameAnimal,
                    species: action.speciesAnimal,
                    breed : action.breedAnimal,
                    animalPhoto : action.animalPhoto,
                    description: action.descriptionAnimal,
                    deleteID:action.deleteAnimal
                }
            }

        default:
            return state    
    }

}

export const showAnimal = (idAnimal,nameAnimal,speciesAnimal,breedAnimal,animalPhoto,descriptionAnimal,deleteAnimal) => {
    return { type: DATA_ANIMAL_PAGE, idAnimal, nameAnimal,speciesAnimal,breedAnimal ,animalPhoto, descriptionAnimal,deleteAnimal}
}
//Thunk



export default dataAboutAnimalReducer