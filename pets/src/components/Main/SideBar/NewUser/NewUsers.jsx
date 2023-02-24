import {NavLink} from "react-router-dom"
import React from "react"
import styles from "../Sidebar.module.scss"


const NewUsers = (props) => {

    return props.users.map(u => <div>
        <NavLink to={u.id===props.user?"/personal":("/user/"+u.id)}>
            <button className={styles.sidebarButtons}>
                {u.id}.
                {u.email}
                <div>{u.location}</div>
            </button>
        </NavLink></div>)
}

export default NewUsers