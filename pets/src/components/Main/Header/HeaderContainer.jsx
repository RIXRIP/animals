import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setPersonalData} from "../../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('user') !== null) {
            this.props.setPersonalData(JSON.parse(localStorage.getItem('user')))
        }
    }

    logOutUser = () => {
        const userData = {
            user: {
                id: null,
                email: '',
                token: null
            }
        }

        this.props.setPersonalData(userData)
        localStorage.removeItem('user')
    }
    render() {
        return <Header {...this.props} logOutUser={this.logOutUser}/>
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth.data
})


export default connect(mapStateToProps, {setPersonalData})(HeaderContainer);
