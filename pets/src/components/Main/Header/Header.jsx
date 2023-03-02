import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss"

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <NavLink className={styles.logo} to="/">Find Your Pet</NavLink>
                <div className={styles.personalAuth}>
                    <div className={styles.personal}>
                    </div>
                </div>
                <NavLink className={styles.personal} to={"/personal"}> <p >{props.auth.user.email}{" | "}</p></NavLink>
                {props.auth.user.email.length ?
                    <p className={styles.auth} onClick={props.logOutUser}>
                        Выйти
                    </p> :
                    <NavLink className={styles.personal} to="/register">
                        <p className={styles.auth}>
                            Регистрация
                        </p>
                    </NavLink>
                }
            </header>

        </>
    );
}
export default Header;