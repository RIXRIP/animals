import axios from "axios";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import styles from "./Register.module.scss"
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
        axios.post('http://localhost:3005/register', newUser)
            .then((response) => {
                props.setPersonalData(response.data)
                localStorage.setItem('user', JSON.stringify({
                    user: {
                        id: response.data.user.id,
                        email: response.data.user.email
                    }, accessToken: response.data.accessToken
                }))
            })
        axios.get(`http://localhost:3005/dataTotalCount`).then(response => {
            axios.put(`http://localhost:3005/dataTotalCount`, {
                animalsCount: props.totalAnimals,
                usersCount: response.data.usersCount + 1
            })
        })
        navigate('/')
    }

    return (
        <div className={styles.content}>
        <form className={styles.form} onSubmit={registerUser}>
            {
                status && <>
                    {
                        status && <p onClick={()=>setStatus(false)}>Нажмите чтобы изменить:{email}</p>
                    }
                    <div><input minLength="6" autoFocus={true} required type={"password"} placeholder="Введите пароль"/></div>
                    <button type={"submit"}> Зарегистрироваться</button>

                </>
            }
            {
                !status && <>
                Ваша почта:
                    <div><input autoFocus={true} required value={email} onChange={(e) => setEmail(e.target.value)} type={"email"}
                                placeholder="Введите email"/></div>
                    <button onClick={() => {
                        setStatus(true)
                    }}>Продолжить
                    </button>
                   <div ><NavLink className={styles.moveTo} to="/login">Уже есть аккаунт?</NavLink></div>
                </>
            }

        </form>
        </div>
    )
}
export default Register