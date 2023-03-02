import {connect} from "react-redux";
import {addText, updateText} from "../../../redux/ads-data-reducer";
import Content from "./Content";
import React from "react";
import {animalsAPI} from "../../../server/api/api";
import {setUserCount} from "../../../redux/ads-user-reducer";

class ContentContainer extends React.Component {
    componentDidMount() {

    }
    NewAnimal(inputName, inputSpecies,inputBreed,inputPhoto,userID,inputDescription){
        animalsAPI.postNewAnimal(inputName, inputSpecies,inputBreed,inputPhoto,userID,inputDescription);
    }
    updateTotalCount(totalAnimals){
        animalsAPI.getTotalCount().then(data => {
            animalsAPI.postTotalCount((totalAnimals), (data.usersCount))})
    }
    render() {
        return <Content {...this.props} NewAnimal={this.NewAnimal} updateTotalCount={this.updateTotalCount}/>
    }
}

const mapStateToProps = (state) => {
    return {
        totalAnimals: state.animalsData.totalAnimals,
        newPostText: state.animalsData.newPostText,
        userID: state.auth.data.user.id
    }
}

export default connect(mapStateToProps, {addText, updateText,setUserCount})(ContentContainer);