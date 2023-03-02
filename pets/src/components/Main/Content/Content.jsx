import React, {useState} from "react";
import Modal from "../../Modal/Modal";
import styles from "./Content.module.scss"
import axios from 'axios'
import {animalsAPI} from "../../../server/api/api";

const Content = (props) => {
    const [modalAddAnimal, setModalAddAnimal] = useState(false);

    let inputRefName = React.createRef();
    let inputRefSpecies = React.createRef();
    let inputRefBreed = React.createRef();
    let inputRefDescription = React.createRef();
    let inputRefPhoto = React.createRef();


    let dataAdd = (e) => {
        e.preventDefault()
        let inputName = inputRefName.current.value;
        let inputSpecies = inputRefSpecies.current.value;
        let inputBreed = inputRefBreed.current.value;
        let inputDescription = inputRefDescription.current.value;
        let inputPhoto = inputRefPhoto.current.value;


        props.addText(inputName, inputSpecies, inputBreed, inputPhoto, inputDescription);

        props.NewAnimal(inputName, inputSpecies,inputBreed,inputPhoto,props.userID,inputDescription);

        props.updateTotalCount(props.totalAnimals + 1)

        inputRefName.current.value = '';
        inputRefSpecies.current.value = '';
        inputRefBreed.current.value = '';
        inputRefDescription.current.value = '';
        inputRefPhoto.current.value = ''

    }
    let changeName = () => {
        let newText = inputRefName.current.value;
        let newSpeciesText = inputRefSpecies.current.value;
        let newBreedText = inputRefBreed.current.value;
        let newDescriptionText = inputRefDescription.current.value;

        props.updateText(newText, newSpeciesText, newBreedText, newDescriptionText)
    }

    return (
        <body className={styles.mainConteiner}>

        <div className={`${styles.announcement} ${styles.item_1}`}>
            <div className={styles.announcementText}>
                <div>Мой питомец потерялся</div>
                <button className={styles.btn} onClick={() => setModalAddAnimal(true)}>Оставить заявку</button>
            </div>
        </div>

        <Modal active={modalAddAnimal} setActive={setModalAddAnimal}>
            <form onSubmit={dataAdd}>
                <div className={styles.modalContent}>
                    Создать объявление
                    <input ref={inputRefName} minLength="3" required onChange={changeName}
                           value={props.newPostText.name}
                           placeholder="Имя/кличка питомца"/>
                    <input ref={inputRefSpecies} minLength="3" required onChange={changeName}
                           value={props.newPostText.species}
                           placeholder="Какое животное(собака/кошка/...)"/>
                    <input ref={inputRefBreed} required onChange={changeName} value={props.newPostText.breed}
                           placeholder="Порода вашего питомца"/>

                    <div>
                        Вставте ссылку на фото животного:
                        <br/> <input ref={inputRefPhoto} onChange={changeName}/>
                    </div>
                </div>
                <div>Если нет фотографии опишите подробнее как выглядит питомец и где вы,</div>
                либо кто-либо другой его последний раз видели:
                <div><textarea className={styles.description} ref={inputRefDescription} onChange={changeName}
                               placeholder="Описание..."/></div>
                <button className={styles.btn} type={"submit"}>Создать</button>
            </form>
        </Modal>
        </body>
    );
}
export default Content;