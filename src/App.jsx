import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home'
import Demo from './pages/Demo'
import Downloads from './pages/Downloads'
import Documents from './pages/Documents'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/downloads" element={<Downloads />} />
                    <Route path="/documentation" element={<Documents />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
            
        </>
    )
}

export default App