import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/index.jsx'
import Home from '../src/components/Home/home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import axios from 'axios'
import Inventory from "./pages/Inventory/index.jsx";
import Orders from "./pages/Orders/index.jsx";
import Customers from "./pages/Customers/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = 'https://cathome-api.onrender.com';
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path="/webadmin" element={<Home />}>
        {/* Rutas anidadas dentro de Home */}
        <Route path="" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
      </Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App;
