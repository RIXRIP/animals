import React from "react";
import { connect } from "react-redux";
import { setUsersProfile, setUsersProfileAnimals } from "../../../redux/ads-user-reducer";
import axios from 'axios'
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import { showAnimal } from "../../../redux/about-animal-reducer";
import Personal from "./Personal";
import { setPersonalProfileAnimals} from "../../../redux/auth-reducer";
class PersonalConatiner extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:3005/animals?userID=" + this.props.userID).then(response => {
            this.props.setPersonalProfileAnimals(response.data);
        });
    }


    render() {
        return <Personal {...this.props} animals={this.props.animals} currentUser={this.props.currentUser}/>
    }
}

let mapStateToProps = (state) => ({
    animals: state.animalsData.animals,
    currentPage: state.animalsData.currentPage,
    userCurrentAnimals: state.auth.userCurrentAnimals,
    personal: state.auth,
    userID: state.auth.data.user.id
})


export default connect(mapStateToProps, { setPersonalProfileAnimals,showAnimal })(PersonalConatiner);
