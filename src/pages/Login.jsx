import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        correo: '',
        clave: '',
    });
  
    const loginUser = async (e) => {
        e.preventDefault();
        const {correo, clave} = data
        try {
          const {data} = await axios.post('/login', {
            correo,
            clave
          })
          if(data.error) {
            toast.error(data.error)
          } else {
            setData({});
            toast.success('Ha iniciado sesión, ¡Bienvenido!')
            navigate('/webadmin')
          }
        } catch (error) {
            console.log(error)
        }
    };
  
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'left' }}>
        <form onSubmit={loginUser} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '300px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>Iniciar Sesión</h2>
            
            <label style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>Correo</label>
            <input type="email" placeholder='Ingresa tu correo...' value={data.correo} onChange={(e) => setData({...data, correo: e.target.value})} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            
            <label style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>Clave</label>
            <input type="password" placeholder='Ingresa tu clave...' value={data.clave} onChange={(e) => setData({...data, clave: e.target.value})} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            
            <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#CC0E4E', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Iniciar Sesión</button>

            <p style={{ marginTop: '1rem', textAlign: 'center', color: '#555' }}>
                ¿No tienes cuenta? <span onClick={() => navigate('/register')} style={{ color: '#CC0E4E', cursor: 'pointer', fontWeight: 'bold' }}>Regístrate</span>
            </p>
        </form>
    </div>
  );
}
