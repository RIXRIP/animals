import styles from "../../AnimalPage/Pages.module.scss";
import NewUserAnimalsItem from "./NewUserAnimalsItem/NewUserAnimalsItem";
import React from "react";


const Personal = (props)=>{

    return(<div className={styles.container}>
        <div>Мой профиль</div>
            <div>Имя: {props.personal.login}</div>
            <div>Почта: {props.personal.email}</div>
            <div>Телефон: {props.personal.phone? props.personal.phone: "Телефон не указан"}</div>
            <div>Город: {props.personal.location? null: "Город не указан"}</div>
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
    )
}
export default Personal