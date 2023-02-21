import { connect } from "react-redux";
import { addText, updateText } from "../../../redux/ads-data-reducer";
import Content from "./Content";


const mapStateToProps = (state) => {
    return {
        totalAnimals: state.animalsData.totalAnimals,
        newPostText: state.animalsData.newPostText,
        userID: state.auth.id
    }
}

const ContentContainer = connect(mapStateToProps, {addText,updateText})(Content);
export default ContentContainer;