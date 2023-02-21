import React from "react";
import {NavLink} from "react-router-dom"
import NewUserAnimalsItem from "./NewUserAnimalsItem/NewUserAnimalsItem";
import styles from "../AnimalPage/Pages.module.scss"

const User = (props) => {
    return <div className={styles.container}>
        <NavLink to="/">
            <button className={styles.btn}>На главную</button>
        </NavLink>
        <div> Имя: {props.currentUser.name}</div>
        <div> Телефон: {props.currentUser.phone}</div>
        <div> Местоположение: {props.currentUser.location}</div>
        <div> Почта: {props.currentUser.email}</div>

        <div className={styles.allItems}>
            {props.userCurrentAnimals.map(a => <div className={styles.conteinerItems}>
                    <NewUserAnimalsItem
                        id={a.id}
                        name={a.name}
                        breed={a.breed}
                        species={a.species}
                        animalPhoto={a.animalPhoto}
                        description={a.description}
                        showAnimal={props.showAnimal}
                    />

                </div>
            )}
        </div>
    </div>
}
export default User