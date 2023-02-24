import React from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { setPersonalData} from "../../../redux/auth-reducer";
class LoginContainer extends React.Component {

    componentDidMount() {

    }
    render() {
        return <Login {...this.props} />
    }
}

let mapStateToProps = (state) => ({
register: state.auth.data
})


export default connect(mapStateToProps, { setPersonalData })(LoginContainer);
