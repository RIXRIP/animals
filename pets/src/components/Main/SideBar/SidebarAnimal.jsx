import React from "react";
import NewAnimalsContainer from "./NewAnimals/NewAnimalsContainer";
import styles from "./Sidebar.module.scss"


const SidebarAnimal = (props) => {
    return (
        <>
            <body className={styles.container}>
                <div className={styles.conteinerGrid}>
                    <h3 className={styles.item_1}>Питомцы</h3>
                    <div className={styles.item}>
                        <NewAnimalsContainer />
                    </div>
                </div>
            </body>
        </>

    );
}

export default SidebarAnimal;