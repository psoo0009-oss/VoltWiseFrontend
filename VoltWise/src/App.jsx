import { BrowserRouter, Routes, Route, Link } from "react-router";
import LandingPage from './pages/LandingPage';
import UserRegisterPage from "./pages/UserRegisterPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<UserRegisterPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
