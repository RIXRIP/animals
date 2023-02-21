import { showAnimal } from "../../../../redux/about-animal-reducer";
import { connect } from "react-redux";
import { setAnimals, setCurrentPage, setTotalAnimals,setUsers } from "../../../../redux/ads-data-reducer";
import NewAnimals from "./NewAnimals";
import React from "react";
import axios from "axios";

class NewAnimalsContainer extends React.Component{
   componentDidMount() {
      axios.get(`http://localhost:3005/animals?_page=${this.currentPage}&_limit=${this.props.pageSize}`).then(response => {
         this.props.setAnimals(response.data);
      });

      axios.get(`http://localhost:3005/dataTotalCount`).then(response => {
         this.props.setTotalAnimals(response.data.animalsCount);
      });
     this.onPageChanged = (pageNumber) => {
         this.props.setCurrentPage(pageNumber);
         axios.get(`http://localhost:3005/animals?_page=${pageNumber}&_limit=${this.props.pageSize}`).then(response => {
            this.props.setAnimals(response.data);
         });
      }
   }

   render() {
      return <NewAnimals {...this.props} onPageChanged = {this.onPageChanged}/>
   }
}
const mapStateToProps = (state) => {

   return {
      animals: state.animalsData.animals,
      pageSize: state.animalsData.pageSize,
      totalAnimals: state.animalsData.totalAnimals,
      currentPage: state.animalsData.currentPage
   }
}

export default connect(mapStateToProps, {showAnimal,setAnimals,setCurrentPage,setTotalAnimals, setUsers})(NewAnimalsContainer);
