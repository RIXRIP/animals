import {NavLink} from "react-router-dom"
import styles from "../../Sidebar.module.scss"

const NewUserItem = (props) => {
    let path = "/personal/" + props.key

    return (
        <NavLink to={path}>
            <button className={styles.sidebarButtons}>{props.key}. {props.name}
                <div>Город: {props.location}</div>
            </button>
        </NavLink>
    )
}
export default NewUserItem