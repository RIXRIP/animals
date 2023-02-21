import React, {useState} from "react";
import Modal from "../../Modal/Modal";
import styles from "./Content.module.scss"
import axios from 'axios'

const Content = (props) => {
    const [modalAddAnimal, setModalAddAnimal] = useState(false);
    const [drag, setDrag] = useState(true)
    let inputRefName = React.createRef();
    let inputRefSpecies = React.createRef();
    let inputRefBreed = React.createRef();
    let inputRefDescription = React.createRef();

    let dataAdd = () => {
        let inputName = inputRefName.current.value;
        let inputSpecies = inputRefSpecies.current.value;
        let inputBreed = inputRefBreed.current.value;
        let inputDescription = inputRefDescription.current.value;

        props.addText(inputName, inputSpecies, inputBreed, "https://www.interfax.ru/ftproot/textphotos/2020/02/07/y700.jpg", inputDescription);
        axios.post(`http://localhost:3005/animals`, {
            name: inputName,    
            species: inputSpecies,
            breed: inputBreed,
            animalPhoto: "https://www.interfax.ru/ftproot/textphotos/2020/02/07/y700.jpg",
            userID: props.userID,
            description: inputDescription
        });
        axios.get(`http://localhost:3005/dataTotalCount`).then(response => {
            axios.put(`http://localhost:3005/dataTotalCount`, {
                animalsCount: props.totalAnimals + 1,
                usersCount: response.data.usersCount
            })
        })

        inputRefName.current.value = '';
        inputRefSpecies.current.value = '';
        inputRefBreed.current.value = '';
        inputRefDescription.current.value = '';

    }

    let changeName = () => {
        let newText = inputRefName.current.value;
        let newSpeciesText = inputRefSpecies.current.value;
        let newBreedText = inputRefBreed.current.value;
        let newDescriptionText = inputRefDescription.current.value;
        props.updateText(newText, newSpeciesText, newBreedText, newDescriptionText)
    }

    const dragStartHandler = (e) => {
        e.preventDefault(true)
        setDrag(true)
    }
    const dragLeaveHandler = (e) => {
        e.preventDefault(false)
        setDrag(false)
    }
    const onDropHandler = (e) => {
        e.preventDefault(false)
        let files = [...e.dataTransfer.files];
        const formData = new FormData();
        formData.append("animalPhoto", files[0]);
        axios.post('http://localhost:3005/animals', formData)
        debugger
        setDrag(false)
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

            <div className={styles.modalContent}>
                Создать объявление
                <input ref={inputRefName} min="3" required onChange={changeName} value={props.newPostText.name}
                       placeholder="Имя/кличка питомца"/>
                <input ref={inputRefSpecies} required onChange={changeName} value={props.newPostText.species}
                       placeholder="Какое животное(собака/кошка/...)"/>
                <input ref={inputRefBreed} required onChange={changeName} value={props.newPostText.breed}
                       placeholder="Порода вашего питомца"/>
            </div>

            <div>Вставте изображение вашего питомца:</div>

            {/*<div>{drag? <div className={styles.dropArea}*/}
            {/*                 onDragStart={e=>dragStartHandler(e)}*/}
            {/*                 onDragLeave={e=>dragLeaveHandler(e)}*/}
            {/*                 onDragOver={e=>dragStartHandler(e)}*/}
            {/*                 onDrop ={e=>onDropHandler(e)}*/}
            {/*    >Отпустите файлы, чтобы загрузить их</div>*/}
            {/*    :<div onDragStart={e=>dragStartHandler(e)}*/}
            {/*          onDragLeave={e=>dragLeaveHandler(e)}*/}
            {/*          onDragOver={e=>dragStartHandler(e)}*/}
            {/*    >Перетащите файлы, чтобы загрузить их</div>*/}
            {/*}</div>*/}

            <div><img className={styles.animalPhoto}
                      src="https://www.interfax.ru/ftproot/textphotos/2020/02/07/y700.jpg" alt="not found"></img></div>
            <div>Если нет фотографии опишите подробнее как выглядит питомец и где вы,</div>
            либо кто-либо другой его последний раз видели:
            <div><textarea className={styles.description} ref={inputRefDescription} onChange={changeName}
                           placeholder="Описание..."/></div>
            <button className={styles.btn} onClick={dataAdd}>Создать</button>

        </Modal>
        </body>
    );
}
export default Content;