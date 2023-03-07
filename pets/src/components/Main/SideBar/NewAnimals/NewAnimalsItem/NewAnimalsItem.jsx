import {NavLink} from 'react-router-dom'
import styles from '../../Sidebar.module.scss'

const NewAnimalsItem = (props) => {

    let recordAnimal = () => {
        props.showAnimal(props.id, props.name, props.species, props.breed, props.animalPhoto, props.description);
    }

    let path = "/animal/" + props.id
    return (
        <NavLink to={path}>
            <button className={styles.sidebarButtons} onClick={recordAnimal}>
                <div><img className={styles.animalPhoto} src={props.animalPhoto} alt="not found photo"/></div>
                {props.id}. {props.name}
            </button>
        </NavLink>
    )
}

export default NewAnimalsItem