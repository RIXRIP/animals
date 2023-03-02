import { NavLink } from 'react-router-dom'
import styles from './NewUserAnimalsItem.module.scss'

const NewUserAnimalsItem = (props) => {
    let recordAnimal = () => {
        props.showAnimal(props.id, props.name, props.species, props.breed, props.animalPhoto , props.description);
    }

    let path = "/animal/" + props.id

    return (
        <>
            <NavLink className={styles.navLink} to={path}><button className={styles.animalButtons} onClick={recordAnimal}> 
            <div><img className={styles.animalPhoto} src={props.animalPhoto} alt="not found"/></div>
            {props.id}. {props.name}
          
            </button>
           
            </NavLink>
        </>
    )
}

export default NewUserAnimalsItem