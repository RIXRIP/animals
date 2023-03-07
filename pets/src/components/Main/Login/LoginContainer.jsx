import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {setPersonalData, setPersonalTC} from "../../../redux/auth-reducer";


class LoginContainer extends React.Component {

    componentDidMount() {

    }
    login(newUser) {
        this.setPersonalTC(newUser);
    }
    render() {
        return <Login {...this.props} login={this.login}/>
    }
}

let mapStateToProps = (state) => ({
    register: state.auth.data
})


export default connect(mapStateToProps, {setPersonalData, setPersonalTC})(LoginContainer);
