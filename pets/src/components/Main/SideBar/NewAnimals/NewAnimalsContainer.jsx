import {showAnimal} from "../../../../redux/about-animal-reducer";
import {connect} from "react-redux";
import {setAnimals, setCurrentPage, setTotalAnimals, setUsers} from "../../../../redux/ads-data-reducer";
import NewAnimals from "./NewAnimals";
import React from "react";
import {animalsAPI} from "../../../../server/api/api";


class NewAnimalsContainer extends React.Component {
    componentDidMount() {
        animalsAPI.getAnimals(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setAnimals(data);
        });

        animalsAPI.getTotalCount().then(data => {
            this.props.setTotalAnimals(data.animalsCount);
        });

        this.onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            animalsAPI.getAnimals(pageNumber, this.props.pageSize).then(data => {
                this.props.setAnimals(data);
            });
        }
    }

    render() {
        return <NewAnimals {...this.props} onPageChanged={this.onPageChanged}/>
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

export default connect(mapStateToProps, {
    showAnimal,
    setAnimals,
    setCurrentPage,
    setTotalAnimals,
    setUsers
})(NewAnimalsContainer);
