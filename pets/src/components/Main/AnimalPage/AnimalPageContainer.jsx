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
    //в функцию mapStateToProps приходят данные из store

    dataAboutAnimal: state.dataAboutAnimal.dataAboutAnimal,
    // userData: state.userData.userData

})
//с помощью функции connect создается контейнерная компонента для отрисовки презентационной компоненты, так же на входные парамметры получает mapStateToProps и mapDispatchToProps
export default connect(mapStateToProps, {})(AnimalPageContainer);
