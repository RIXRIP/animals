import { connect } from "react-redux";
import { addText, updateText } from "../../../redux/ads-data-reducer";
import Content from "./Content";
import React from "react";
import axios from 'axios'
class ContentContainer extends React.Component{
    componentDidMount() {

    }
    render() {
      return  <Content {...this.props}/>
    }
}
const mapStateToProps = (state) => {
    return {
        totalAnimals: state.animalsData.totalAnimals,
        newPostText: state.animalsData.newPostText,
        userID: state.auth.id
    }
}

export default connect(mapStateToProps, {addText,updateText})(ContentContainer);