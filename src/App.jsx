import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route index element={<Signup />} />
                    <Route path="/login" element={<Login />} /> */}
                </Routes>
            </BrowserRouter>
            <ToastContainer />
            
        </>
    )
}

export default App