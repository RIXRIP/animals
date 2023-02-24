import styles from '../Sidebar.module.scss'
import React from "react";
import NewAnimalsItem from './NewAnimalsItem/NewAnimalsItem';

const NewAnimals =(props)=> {

        let pagesCount = Math.ceil(props.totalAnimals / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={styles.pagination}>
                {
                    pages.map(p => <span className={styles.pagination}> <button className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => props.onPageChanged(p)} >{p}</button></span>)
                }
            </div>
            {props.animals.map(a => <div className={styles.conteinerGrid}>
                <NewAnimalsItem
                    id={a.id}
                    name={a.name}
                    breed={a.breed}
                    species={a.species}
                    animalPhoto={a.animalPhoto}
                    description={a.description}
                    showAnimal={props.showAnimal}/>
            </div>

            )}
        </div>
}
export default NewAnimals