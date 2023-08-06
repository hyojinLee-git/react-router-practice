import Layout from "layouts/Layout";
import Login from "pages/Login";
import Main from "pages/Main";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;
