import React from "react";
import { connect } from "react-redux";
import { showAnimal } from "../../../redux/about-animal-reducer";
import Personal from "./Personal";
import {deleteAnimalTC, getPersonalAnimalsTC, setPersonalProfileAnimals} from "../../../redux/auth-reducer";
class PersonalContainer extends React.Component {

    componentDidMount() {
        this.props.getPersonalAnimalsTC(this.props.userID)
    }
    postDelete=()=>{
    this.props.deleteAnimalTC(this.props.id,this.props.totalAnimals)
    }

    render() {
        return <Personal {...this.props} animals={this.props.animals} currentUser={this.props.currentUser} postDelete={this.postDelete}/>
    }
}

let mapStateToProps = (state) => ({
    animals: state.animalsData.animals,
    userCurrentAnimals: state.auth.userCurrentAnimals,
    personal: state.auth,
    userID: state.auth.data.user.id,
    totalAnimals: state.animalsData.totalAnimals,
    id:state.dataAboutAnimal.dataAboutAnimal.deleteID
})


export default connect(mapStateToProps, { setPersonalProfileAnimals,showAnimal,getPersonalAnimalsTC,deleteAnimalTC })(PersonalContainer);
