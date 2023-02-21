import { connect } from "react-redux"
import AnimalPage from "./AnimalPage"


    const mapStateToProps = (state)=>{
    //в функцию mapStateToProps приходят данные из store
        return {
            dataAboutAnimal: state.dataAboutAnimal.dataAboutAnimal,
            // userData: state.userData.userData
        }
    }
//с помощью функции connect создается контейнерная компонента для отрисовки презентационной компоненты, так же на входные парамметры получает mapStateToProps и mapDispatchToProps
const AnimalPageContainer = connect(mapStateToProps,{})(AnimalPage);
export default AnimalPageContainer;