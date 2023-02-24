import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss"

const Header = (props) => {

    const logOutUser = () => {
        let userData = {
            user: {
                id: null,
                email: '',
                token: null
            }
        }
        props.setPersonalData(userData)
        localStorage.removeItem('user')
    }

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
                    <p className={styles.auth} onClick={logOutUser}>
                        Выйти
                    </p> :
                    <NavLink className={styles.auth} to="/register">
                        <text >
                            Регистрация
                        </text>
                    </NavLink>
                }
            </header>

        </>
    );
}
export default Header;