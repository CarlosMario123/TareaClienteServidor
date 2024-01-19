import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerUser from '../services/user/registerServices';


const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const registrar = async (user) => {
    try {
      setLoading(true);
       let respuesta = await registerUser(user);

       if(!respuesta){
        navigate("/login")
       }
      
    } catch (error) {
      console.error('Error:', error.message);
      setError('Error de red');
    } finally {
      setLoading(false);
    }
  };

  return { registrar, loading, error };
};

export default useRegistration;
