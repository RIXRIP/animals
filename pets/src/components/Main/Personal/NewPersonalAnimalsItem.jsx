import { NavLink } from 'react-router-dom'
import styles from '../User/NewUserAnimalsItem/NewUserAnimalsItem.module.scss'
import axios from "axios";

const NewPersonalAnimalsItem = (props) => {
    let recordAnimal = () => {
        let idAnimal = props.id;
        let nameAnimal = props.name;
        let speciesAnimal = props.species;
        let breedAnimal = props.breed;
        let animalPhoto = props.animalPhoto;
        let descriptionAnimal = props.description;
        props.showAnimal(idAnimal, nameAnimal, speciesAnimal, breedAnimal, animalPhoto , descriptionAnimal);

    }

const postDelete=()=>{
    axios.delete("http://localhost:3005/animals?id="+props.id).then(response  =>{
    console.log(response.data)
    })

}

    return (
        <>
            <NavLink className={styles.navLink} to={"/animal/" + props.id}><button className={styles.animalButtons} onClick={recordAnimal}>
            <div><img className={styles.animalPhoto} src={props.animalPhoto} alt="not found"/></div>
            {props.id}. {props.name}

            </button>

            </NavLink>
            <button className={styles.deleteBtn} onClick={postDelete}>Удалить</button>
        </>
    )
}

export default NewPersonalAnimalsItem