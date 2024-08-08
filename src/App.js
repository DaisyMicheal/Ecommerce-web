import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignupPage from './pages/SignupPage'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
