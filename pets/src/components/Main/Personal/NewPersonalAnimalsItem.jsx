import { NavLink } from 'react-router-dom'
import styles from '../User/NewUserAnimalsItem/NewUserAnimalsItem.module.scss'

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

    let path = "/animal/" + props.id

    return (
        <>
            <NavLink className={styles.navLink} to={path}><button className={styles.animalButtons} onClick={recordAnimal}> 
            <div><img className={styles.animalPhoto} src={props.animalPhoto} alt="not found"/></div>
            {props.id}. {props.name}
            <button className={styles.deliteBtn}>Удалить</button>
            </button>
           
            </NavLink>
        </>
    )
}

export default NewPersonalAnimalsItem