import SidebarAnimal from "../SideBar/SidebarAnimal";
import styles from "./Main.module.scss"
import ContentContainer from "./Content/ContentContainer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimalPageContainer from "../AnimalPage/AnimalPageContainer";
import SidebarUser from "../SideBar/SidebarUser";
import UserContainer from "./Personal/UserContainer";
import HeaderContainer from "./Header/HeaderContainer";
import PersonalConatiner from "./Personal/PersonalContainer";

const Main = (props) => {
    return (
        <>
            <Router>
                <HeaderContainer className={styles.header} />
                <div className={styles.сonteiner}>
                    <SidebarAnimal className={styles.sidebar}  />
                    <Routes >
                        <Route exact path="/" element={<ContentContainer className={styles.content}/>}></Route>
                        <Route path={"/user/:id"} element={<UserContainer />}></Route>
                        <Route path={"/personal"} element={<PersonalConatiner  />}></Route>
                        <Route path={"/animal/:id"} element={<AnimalPageContainer  />}></Route>
                    </Routes >
                    <SidebarUser/>
                </div>
            </Router>

        </>
    );
}
export default Main;