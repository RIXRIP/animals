import React from "react";
import { connect } from "react-redux";
import Register from "./Register";
import {setPersonalData} from "../../../redux/auth-reducer";

class RegisterContainer extends React.Component {

    componentDidMount() {

    }
    render() {
        return <Register {...this.props} />
    }
}

let mapStateToProps = (state) => ({
register: state.auth.data,
    totalAnimals: state.animalsData.totalAnimals
})


export default connect(mapStateToProps, { setPersonalData })(RegisterContainer);
