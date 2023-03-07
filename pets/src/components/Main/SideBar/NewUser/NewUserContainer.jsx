import {connect} from "react-redux";
import {getUserTC} from "../../../../redux/ads-user-reducer";
import NewUsers from "./NewUsers";
import React from "react";


class NewUsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUserTC();
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
export default connect(mapStateToProps, {getUserTC})(NewUsersContainer);