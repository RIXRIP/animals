import {NavLink} from "react-router-dom"
import axios from 'axios'
import React from "react"
import styles from "../Sidebar.module.scss"

const NewUsers = (props) => {

    return props.users.map(u => <div>
        <NavLink to={"/user/" + u.id}>
            <button className={styles.sidebarButtons}>
                {u.id}.
                {u.name}
                <div>{u.location}</div>
            </button>
        </NavLink></div>)
}

export default NewUsers