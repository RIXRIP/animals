import axios from "axios";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import styles from "./Register.module.scss"
import {animalsAPI, usersAPI} from "../../../server/api/api";

const Register = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [status, setStatus] = useState()

    const registerUser = (e) => {
        e.preventDefault()
        let newUser = {
            email,
            password: e.target[0].value
        }

        usersAPI.registerUser(newUser)
            .then((data) => {
                props.setPersonalData(data)
                localStorage.setItem('user', JSON.stringify({
                    user: {
                        id: data.user.id,
                        email: data.user.email
                    }, accessToken: data.accessToken
                }))
                props.updateTotalCount(props.totalUsers+1);
            })
        navigate('/')
    }

    return (
        <div className={styles.content}>
            <form className={styles.form} onSubmit={registerUser}>
                {
                    status && <>
                        {
                            status && <p onClick={() => setStatus(false)}>Нажмите чтобы изменить:{email}</p>
                        }
                        <div><input minLength="6" autoFocus={true} required type={"password"} placeholder="Введите пароль"/>
                        </div>
                        <button type={"submit"}> Зарегистрироваться</button>

                    </>
                }
                {
                    !status && <>
                        Ваша почта:
                        <div><input autoFocus={true} required value={email} onChange={(e) => setEmail(e.target.value)}
                                    type={"email"}
                                    placeholder="Введите email"/></div>
                        <button onClick={() => {
                            setStatus(true)
                        }}>Продолжить
                        </button>
                        <div><NavLink className={styles.moveTo} to="/login">Уже есть аккаунт?</NavLink></div>
                    </>
                }

            </form>
        </div>
    )
}
export default Register