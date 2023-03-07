import {connect} from "react-redux";
import {addText, postAnimalTC, updateText, updateTotalAnimalsTC} from "../../../redux/ads-data-reducer";
import Content from "./Content";
import React from "react";
import {setUserCount} from "../../../redux/ads-user-reducer";

class ContentContainer extends React.Component {
    componentDidMount() {

    }
    NewAnimal(inputName, inputSpecies,inputBreed,inputPhoto,userID,inputDescription){
       this.postAnimalTC(inputName, inputSpecies,inputBreed,inputPhoto,userID,inputDescription);
    }
    updateTotalCount(totalAnimals){
      this.updateTotalAnimalsTC(totalAnimals);
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

export default connect(mapStateToProps, {addText, updateText,setUserCount, postAnimalTC, updateTotalAnimalsTC})(ContentContainer);