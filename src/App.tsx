import Layout from "layouts/Layout";
import Login from "pages/Login";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import Post from "pages/post/Post";
import Posts from "pages/post/Posts";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/posts" element={<Posts />} />
            </Route>
            <Route path="/posts/:id" element={<Post />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
