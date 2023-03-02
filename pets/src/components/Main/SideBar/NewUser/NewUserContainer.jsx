import {connect} from "react-redux";
import {setUsers} from "../../../../redux/ads-user-reducer";
import NewUsers from "./NewUsers";
import React from "react";
import {usersAPI} from "../../../../server/api/api";

class NewUsersContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers().then(data => {
            this.props.setUsers(data);
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
        currentPage: state.animalsData.currentPage,
        user: state.auth.data.user.id
    }
}
export default connect(mapStateToProps, {setUsers})(NewUsersContainer);