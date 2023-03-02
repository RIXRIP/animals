import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { setPersonalData} from "../../../redux/auth-reducer";
import {usersAPI} from "../../../server/api/api";
class LoginContainer extends React.Component {

    componentDidMount() {

    }
    login(newUser){
        usersAPI.loginUser(newUser).then((data) => {
        this.setPersonalData(data)
            localStorage.setItem('user', JSON.stringify({user:{id: data.user.id,email: data.user.email},accessToken: data.accessToken}))
        })
    }


    render() {
        return <Login {...this.props} login={this.login}/>
    }
}

let mapStateToProps = (state) => ({
register: state.auth.data
})


export default connect(mapStateToProps, { setPersonalData })(LoginContainer);
