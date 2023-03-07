import {showAnimal} from "../../../../redux/about-animal-reducer";
import {connect} from "react-redux";
import {onPageChangedTC, paginationTC,} from "../../../../redux/ads-data-reducer";
import NewAnimals from "./NewAnimals";
import React from "react";

class NewAnimalsContainer extends React.Component {
    componentDidMount() {
        this.props.paginationTC(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChangedTC(pageNumber, this.props.pageSize)
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
    paginationTC,
    onPageChangedTC
})(NewAnimalsContainer);
