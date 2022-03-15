import { Route, Routes } from "react-router-dom"
import About from "../Pages/About"
import Article from "../Pages/Article"
import Articles from "../Pages/Articles"
import Chat from "../Pages/Chat"
import Home from "../Pages/Home"
import Register from "../Pages/Register"

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:index" element={<Article />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </div>
    )

}

export default Content