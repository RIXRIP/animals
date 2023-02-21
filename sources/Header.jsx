import {useState} from "react";
import {NavLink} from "react-router-dom";
import Modal from "../../Modal/Modal";
import styles from "./Header.module.scss"

const Header = (props) => {
    const [modalAuthorization, setModalAuthorization] = useState(false);
    const [modalRegistration, setModalRegistration] = useState(false);
    return (
        <>
            <header className={styles.header}>
                <NavLink className={styles.logo} to="/">Find Your Pet</NavLink>
                <div className={styles.personalAuth}>
                    <div className={styles.personal}>
                        {props.isAuth ? (
                                <NavLink className={styles.personal} to='/personal'>{props.login + " |"}</NavLink>) :
                            <NavLink to='/personal'>ЛИЧНЫЙ КАБИНЕТ |</NavLink>}
                    </div>
                    <text className={styles.auth} onClick={() => setModalAuthorization(true)}>ВОЙТИ</text>
                </div>

            </header>

            <Modal active={modalAuthorization} setActive={setModalAuthorization}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>Авторизация</div>
                    <input placeholder="Ваш логин"/>
                    <input placeholder="Пароль"/>
                    <div className={styles.navAuth} onClick={() => {
                        setModalRegistration(true);
                        setModalAuthorization(false)
                    }}>
                        <input type="submit"/>
                        Регистрация
                    </div>
                </div>
            </Modal>
            <Modal active={modalRegistration} setActive={setModalRegistration}>Проверка регистрация
                <input placeholder="Ваше имя"/>
                <input placeholder="Почта"/>
                <input placeholder="Пароль"/>
                <input placeholder="Повторрите пароль"/>
                <input type="submit"/>
            </Modal>
        </>
    );
}
export default Header;