import { connect } from "react-redux";
import { setUsers } from "../../../redux/ads-user-reducer";
import NewUsers from "./NewUsers";

const mapStateToProps = (state) => {
   return {
      users: state.usersData.users,
      pageSize: state.usersData.pageSize,
      totalUsersCount: state.animalsData.totalUsersCount,
      currentPage: state.animalsData.currentPage


   }
}

const NewUserContainer = connect(mapStateToProps, { setUsers })(NewUsers);
export default NewUserContainer