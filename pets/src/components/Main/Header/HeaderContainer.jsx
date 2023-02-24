import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setPersonalData} from "../../../redux/auth-reducer";


class HomeContainer extends React.Component {
    componentDidMount() {
        if(localStorage.getItem('user')!==null){
            this.props.setPersonalData(JSON.parse(localStorage.getItem('user')))
        }
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth.data
})


export default connect(mapStateToProps, { setPersonalData })(HomeContainer);
