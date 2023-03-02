import React from "react";
import { connect } from "react-redux";
import axios from 'axios'
import { showAnimal } from "../../../redux/about-animal-reducer";
import Personal from "./Personal";
import { setPersonalProfileAnimals} from "../../../redux/auth-reducer";
import {animalsAPI} from "../../../server/api/api";
class PersonalConatiner extends React.Component {

    componentDidMount() {
        animalsAPI.getPersonalAnimals(this.props.userID).then(data => {
            this.props.setPersonalProfileAnimals(data);
        });
    }
    postDelete=()=>{
        animalsAPI.deleteAnimal(this.props.id).then(data => {
            this.props.setPersonalProfileAnimals(data);
        })
        animalsAPI.getTotalCount().then(data => {
            animalsAPI.postTotalCount((this.props.totalAnimals - 1), (data.usersCount))
        })
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


export default connect(mapStateToProps, { setPersonalProfileAnimals,showAnimal })(PersonalConatiner);
