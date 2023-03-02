import {NavLink} from 'react-router-dom'
import styles from '../User/NewUserAnimalsItem/NewUserAnimalsItem.module.scss'
import axios from "axios";

const NewPersonalAnimalsItem = (props) => {

    let recordAnimal = () => {
        props.showAnimal(props.id, props.name, props.species, props.breed, props.animalPhoto , props.description);
    }
const deleteID=()=>{
    let deleteAnimal = props.id
    props.showAnimal(props.id, props.name, props.species, props.breed, props.animalPhoto , props.description, deleteAnimal);
}

    return (
        <>
            <form onSubmit={props.postDelete}>

                <NavLink className={styles.navLink} to={"/animal/" + props.id}> 
                    <button className={styles.animalButtons} onClick={recordAnimal}>
                        <div><img className={styles.animalPhoto} src={props.animalPhoto} alt="not found photo"/></div>
                        {props.id}. {props.name}
                    </button>
                </NavLink>
                <button className={styles.deleteBtn} onClick={deleteID} type={"submit"} >Удалить</button>
            </form>

        </>
    )
}

export default NewPersonalAnimalsItem