import {NavLink} from "react-router-dom"
import axios from 'axios'
import React from "react"
import styles from "../Sidebar.module.scss"


class NewUsers extends React.Component {

    componentDidMount() {

        axios.get("http://localhost:3005/users").then(response => {
            this.props.setUsers(response.data);
        });
    }

    render() {

        return this.props.users.map(u => <div>
            <NavLink to={"/user/" + u.id}>
                <button className={styles.sidebarButtons}>
                    {u.id}.
                    {u.name}
                    <div>{u.location}</div>
                </button>
            </NavLink></div>)
    }
}

export default NewUsers