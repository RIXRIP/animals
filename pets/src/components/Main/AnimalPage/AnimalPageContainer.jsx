import {connect} from "react-redux"
import AnimalPage from "./AnimalPage"
import React from "react";

class AnimalPageContainer extends React.Component {
    componentDidMount() {
    }
    render() {
       return <AnimalPage {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    dataAboutAnimal: state.dataAboutAnimal.dataAboutAnimal,
})

export default connect(mapStateToProps, {})(AnimalPageContainer);
