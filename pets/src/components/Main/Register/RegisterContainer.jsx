import React from "react";
import {connect} from "react-redux";
import Register from "./Register";
import { registerUserTC} from "../../../redux/auth-reducer";




class RegisterContainer extends React.Component {
    componentDidMount() {
    }

    register(newUser) {
        this.registerUserTC(newUser,)
    }

    render() {
        return <Register {...this.props} register={this.register}/>
    }
}

let mapStateToProps = (state) => ({
    register: state.auth.data
})


export default connect(mapStateToProps, {registerUserTC})(RegisterContainer);
