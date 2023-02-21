import styles from './NewAnimals.module.scss'
import React from "react";
import axios from "axios";
import NewAnimalsItem from './NewAnimalsItem/NewAnimalsItem';

class NewAnimals extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3005/animals?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(response => {
            this.props.setAnimals(response.data);
        });
        // axios.get(`http://localhost:3005/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`).then(response => {
        //     this.props.setUsers(response.data);
        // });

        axios.get(`http://localhost:3005/dataTotalCount`).then(response => {
            this.props.setTotalAnimals(response.data.animalsCount);

        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:3005/animals?_page=${pageNumber}&_limit=${this.props.pageSize}`).then(response => {
            this.props.setAnimals(response.data);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalAnimals / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={styles.pagination}>
                {
                    pages.map(p => <span className={styles.pagination}> <button className={this.props.currentPage === p && styles.selectedPage}
                        onClick={(e) => this.onPageChanged(p)} >{p}</button></span>)
                }
            </div>
            {this.props.animals.map(a => <div className={styles.conteinerGrid}>
                <NewAnimalsItem
                    id={a.id}
                    name={a.name}
                    breed={a.breed}
                    species={a.species}
                    animalPhoto={a.animalPhoto}
                    description={a.description}
                    showAnimal={this.props.showAnimal}
                />

            </div>
            )}
        </div>
    }
}
export default NewAnimals