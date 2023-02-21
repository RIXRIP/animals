import {NavLink} from "react-router-dom"
import React from "react";
import styles from "./Pages.module.scss"

const AnimalPage = (props) => {
    //форма для отображения данных о питомце

    return (
        <div className={styles.container}>
            <div>
                <NavLink to="/">
                    <button className={styles.btn}>На главную</button>
                </NavLink>
                <div><img className={styles.Photo} src={props.dataAboutAnimal.animalPhoto}/></div>
                <div> Имя питомца: {props.dataAboutAnimal.name}</div>
                <div> Вид: {props.dataAboutAnimal.species}</div>
                <div> Порода: {props.dataAboutAnimal.breed}</div>
                <div> Описание: {props.dataAboutAnimal.description}</div>
            </div>
        </div>
    )

}
export default AnimalPage