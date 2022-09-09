import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Login from "../pages/LoginPage";
import Main from "../pages/Main"
import SignUp from "../pages/SignUpPage";


function Router() {
    return (
        <>
            <Header />
            <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
            </Routes>
        </>
    )
}

export default Router;