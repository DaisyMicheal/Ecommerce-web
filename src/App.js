import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PaymentPage from './pages/PaymentPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PaymentPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
