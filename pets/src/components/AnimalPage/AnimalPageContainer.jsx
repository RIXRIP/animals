import { connect } from "react-redux"
import AnimalPage from "./AnimalPage"


    const mapStateToProps = (state)=>{
    
        return {
            dataAboutAnimal: state.dataAboutAnimal.dataAboutAnimal,
            // userData: state.userData.userData
        }
    }

const AnimalPageContainer = connect(mapStateToProps,{})(AnimalPage);
export default AnimalPageContainer;