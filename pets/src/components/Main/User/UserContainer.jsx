import React from "react";
import { connect } from "react-redux";
import { setUsersProfile, setUsersProfileAnimals } from "../../../redux/ads-user-reducer";
import User from "./User"
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import { showAnimal } from "../../../redux/about-animal-reducer";
import {animalsAPI, usersAPI} from "../../../api/api";

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }

   return ComponentWithRouterProp;
}
class UsersContainer extends React.Component {

   componentDidMount() {
      let id = this.props.router.params.id;
      usersAPI.getCurrentUser(id).then(data => {
         this.props.setUsersProfile(data);
      });
      animalsAPI.getPersonalAnimals(id).then(data => {
         this.props.setUsersProfileAnimals(data);
      });
   }


   render() {
      return <User {...this.props} currentUser={this.props.currentUser} />
   }
}

let mapStateToProps = (state) => ({
   currentUser: state.usersData.currentUser,
   pageSize: state.usersData.pageSize,
   totalUsersCount: state.animalsData.totalUsersCount,
   currentPage: state.animalsData.currentPage,
   userCurrentAnimals: state.usersData.userCurrentAnimals,

})


export default connect(mapStateToProps, { setUsersProfile,setUsersProfileAnimals,showAnimal })(withRouter(UsersContainer));
