import { useState, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Register() {
  const form = useRef();
  const navigate = useNavigate();
  const [data, setData] = useState({
    nombre: '',
    correo: '',
    clave: '',
  });

  const RegisterUser = async (e) => {
    e.preventDefault();
    const { nombre, correo, clave } = data;

    // Validaciones básicas
    if (!nombre || !correo || !clave) {
      toast.error('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Enviar el correo con EmailJS
      await emailjs.sendForm(
        'service_kbpz8l6',
        'template_0rup1si',
        form.current,
        '5_etwE3aaizUdxcMR'
      );
      console.log('Correo enviado con éxito');

      // Registrar al usuario
      const response = await axios.post('/register', { nombre, correo, clave });
      const { data } = response;

      if (data.error) {
        toast.error(data.error);
      } else {
        form.current.reset(); // Resetea el formulario
        setData({ nombre: '', correo: '', clave: '' });
        toast.success('Ha iniciado sesión correctamente, ¡Bienvenido!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      toast.error('Hubo un problema. Inténtalo más tarde.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'left' }}>
      <form
        ref={form}
        onSubmit={RegisterUser}
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '300px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>Registro</h2>

        <label style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>Nombre</label>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre..."
          value={data.nombre}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <label style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>Correo</label>
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu correo..."
          value={data.correo}
          onChange={(e) => setData({ ...data, correo: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <label style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: '#555' }}>Clave</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa tu clave..."
          value={data.clave}
          onChange={(e) => setData({ ...data, clave: e.target.value })}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#CC0E4E',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Registrar
        </button>

        <p style={{ marginTop: '1rem', textAlign: 'center', color: '#555' }}>
          ¿Ya tienes cuenta?{' '}
          <span onClick={() => navigate('/login')} style={{ color: '#CC0E4E', cursor: 'pointer', fontWeight: 'bold' }}>
            Inicia sesión
          </span>
        </p>
      </form>
    </div>
  );
}