import styles from "../AnimalPage/Pages.module.scss";
import React from "react";
import NewPersonalAnimalsItem from "./NewPersonalAnimalsItem";
import {NavLink} from "react-router-dom";
import {setPersonalProfileAnimals} from "../../../redux/auth-reducer";
import axios from "axios";


const Personal = (props) => {

    return (<div className={styles.container}>
            <NavLink to={"/"}> <button className={styles.btn}>На главную</button></NavLink>
            <div>Мой профиль</div>
            <div>Почта: {props.personal.data.user.email}</div>
            <div className={styles.allItems}>
                {props.userCurrentAnimals.map(a => <div className={styles.conteinerItems}>
                        <NewPersonalAnimalsItem
                            id={a.id}
                            name={a.name}
                            breed={a.breed}
                            species={a.species}
                            animalPhoto={a.animalPhoto}
                            description={a.description}
                            showAnimal={props.showAnimal}
                            setPersonalProfileAnimals={props.setPersonalProfileAnimals}
                            totalAnimals = {props.totalAnimals}
                            postDelete={props.postDelete}
                        />

                    </div>
                )}
            </div>
        </div>
    )
}
export default Personal