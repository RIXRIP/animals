import {connect} from "react-redux";
import {setUsers} from "../../../../redux/ads-user-reducer";
import NewUsers from "./NewUsers";
import React from "react";
import axios from "axios";

class NewUsersContainer extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:3005/users").then(response => {
            this.props.setUsers(response.data);
        });
    }

    render() {
        return <NewUsers {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.animalsData.totalUsersCount,
        currentPage: state.animalsData.currentPage
    }
}
export default connect(mapStateToProps, {setUsers})(NewUsersContainer);