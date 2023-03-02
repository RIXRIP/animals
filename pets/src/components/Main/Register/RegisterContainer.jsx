import React from "react";
import { connect } from "react-redux";
import Register from "./Register";
import {setPersonalData} from "../../../redux/auth-reducer";
import {animalsAPI} from "../../../server/api/api";
import {setUserCount} from "../../../redux/ads-user-reducer";

class RegisterContainer extends React.Component {

    componentDidMount() {
    }
    updateTotalCount(usersCount){
        animalsAPI.getTotalCount().then(data => {
            animalsAPI.postTotalCount((data.animalsCount), (usersCount))
        })
    }
    render() {
        return <Register {...this.props} updateTotalCount={this.updateTotalCount}/>
    }
}

let mapStateToProps = (state) => ({
register: state.auth.data,
    totalAnimals: state.animalsData.totalAnimals,
    totalUsers: state.usersData.totalUsersCount
})


export default connect(mapStateToProps, { setPersonalData,setUserCount })(RegisterContainer);
