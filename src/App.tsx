import './App.css'
import { Routes, Route } from 'react-router-dom';


function MainLayout() {
    return null;
}

function Dashboard() {
    return null;
}

function Markets() {
    return null;
}

function Portfolio() {
    return null;
}

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="markets" element={<Markets />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Route>
        </Routes>
    );
}

export default App
