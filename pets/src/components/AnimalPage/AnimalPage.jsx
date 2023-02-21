import { NavLink } from "react-router-dom"
import React from "react";
import styles from "./Pages.module.scss"

class AnimalPage extends React.Component {
    
    render() {
        return (
            <>
                <div className={styles.container}>
                    <div>
                        <NavLink to="/"><button className={styles.btn}>На главную</button></NavLink>
                        <div> <img className={styles.Photo} src={this.props.dataAboutAnimal.animalPhoto} /></div>
                        <div> Имя питомца:  {this.props.dataAboutAnimal.name}</div>
                        <div> Вид:  {this.props.dataAboutAnimal.species}</div>
                        <div> Порода:  {this.props.dataAboutAnimal.breed}</div>
                        <div> Описание:  {this.props.dataAboutAnimal.description}</div>
                    </div>
                    <div>
                        {/* <text>Пользователь</text>
                        <div>{showUserName}</div>
                        <div>{showUserPhone}</div>
                        <div>{showUserLocation}</div> */}
                    </div>
                </div>
            </>
        )
    }
}
export default AnimalPage