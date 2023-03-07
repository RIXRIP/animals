import SidebarAnimal from "./SideBar/SidebarAnimal";
import styles from "./Main.module.scss"
import ContentContainer from "./Content/ContentContainer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimalPageContainer from "./AnimalPage/AnimalPageContainer";
import SidebarUser from "./SideBar/SidebarUser";
import UserContainer from "./User/UserContainer";
import HeaderContainer from "./Header/HeaderContainer";
import PersonalContainer from "./Personal/PersonalContainer";
import LoginContainer from "./Login/LoginContainer";
import RegisterContainer from "./Register/RegisterContainer";

const Main = (props) => {
    return (
        <>
            <Router>
                <HeaderContainer className={styles.header} />
                <div className={styles.container}>
                    <SidebarAnimal className={styles.sidebar}  />
                    <Routes >
                        <Route exact path="/" element={<ContentContainer className={styles.content}/>}></Route>
                        <Route path={"/user/:id"} element={<UserContainer />}></Route>
                        <Route path={"/personal"} element={<PersonalContainer  />}></Route>
                        <Route path={"/animal/:id"} element={<AnimalPageContainer  />}></Route>
                        <Route exact path="/login" element={<LoginContainer/>}></Route>
                        <Route exact path="/register" element={<RegisterContainer/>}></Route>
                    </Routes >
                    <SidebarUser/>
                </div>
            </Router>

        </>
    );
}
export default Main;