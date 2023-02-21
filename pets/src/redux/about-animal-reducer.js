const DATA_ANIMAL_PAGE = "DATA-ANIMAL-PAGE";

const initialState = {
    dataAboutAnimal: {
    },
}

const dataAboutAnimalReducer = (state = initialState, action) => {
    switch (action.type) {
        //case с пушем данных из action creater в state
        case DATA_ANIMAL_PAGE:
            return {
                dataAboutAnimal:{
                    id : action.idAnimal,
                    name : action.nameAnimal,
                    species: action.speciesAnimal,
                    breed : action.breedAnimal,
                    animalPhoto : action.animalPhoto,
                    description: action.descriptionAnimal
                }
            }
      
        // case 
        default:
            return state    
    }


}
//action creater, в него приходят данные для вывода информации на эран
export const showAnimal = (idAnimal,nameAnimal,speciesAnimal,breedAnimal,animalPhoto,descriptionAnimal) => {
    return { type: DATA_ANIMAL_PAGE, idAnimal, nameAnimal,speciesAnimal,breedAnimal ,animalPhoto, descriptionAnimal}
}
export default dataAboutAnimalReducer