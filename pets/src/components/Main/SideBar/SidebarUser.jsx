import React from "react";
import NewUserContainer from "./NewUser/NewUserContainer";
import styles from "./Sidebar.module.scss"


const SidebarUser = (props) => {
    return (
        <>
            <body className={styles.container}>
                <div className={styles.conteinerGrid}>
                    <h3 className={styles.item_1}>Пользователи</h3>
                    <div className={styles.item}>
                        <NewUserContainer />
                    </div>
                </div>
            </body>
        </>

    );
}

export default SidebarUser;