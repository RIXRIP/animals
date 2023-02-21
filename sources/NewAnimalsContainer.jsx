
import { showAnimal } from "../../../redux/about-animal-reducer";
import { connect } from "react-redux";
import { setAnimals, setCurrentPage, setTotalAnimals,setUsers } from "../../../redux/ads-data-reducer";
import NewAnimals from "./NewAnimals";




const mapStateToProps = (state) => {

   return {
      animals: state.animalsData.animals,
      pageSize: state.animalsData.pageSize,
      totalAnimals: state.animalsData.totalAnimals,
      currentPage: state.animalsData.currentPage
   }
}

const NewAnimalsContainer = connect(mapStateToProps, {showAnimal,setAnimals,setCurrentPage,setTotalAnimals, setUsers})(NewAnimals);
export default NewAnimalsContainer