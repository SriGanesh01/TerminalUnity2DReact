import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home'
import Demo from './pages/Demo'
import Downloads from './pages/Downloads'
import Documents from './pages/Documents'
import NoPage from './pages/NoPage'
import ContactUs from './pages/ContactUs'
import Updates from './pages/Updates'
import About from './pages/About'

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
                    <Route path="/contacts" element={<ContactUs />} />
                    <Route path="/updates" element={<Updates />} />
                    <Route path="/blog" element={<Updates />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
            
        </>
    )
}

export default App