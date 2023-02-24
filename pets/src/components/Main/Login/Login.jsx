import axios from "axios";
import styles from "./Login.module.scss"
import {useNavigate} from "react-router-dom";
const Login = (props) => {
    const navigate = useNavigate()
    const loginUser =(e)=>{
        e.preventDefault()
        let newUser={
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post('http://localhost:3005/login', newUser)
            .then((response) => {
                props.setPersonalData(response.data)
                localStorage.setItem('user', JSON.stringify({user:{id: response.data.user.id,email: response.data.user.email},accessToken: response.data.accessToken}))
            })
        navigate("/")
    }
    return (
        <div className={styles.content}>
        <form className={styles.form} onSubmit={loginUser}>
            Ваш логин:
            <div><input autoFocus={true} required placeholder={"Введите ваш email"} type={"email"}/></div>
            Пароль:
            <div><input minLength="6"  required placeholder={"Введите ваш пароль"} type={"password"}/></div>
            <button>Войти</button>
        </form>
        </div>
    )
}
export default Login