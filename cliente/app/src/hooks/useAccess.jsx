import loginService from "../services/user/loginServices";
import { useNavigate } from 'react-router-dom';

const useAccess = ()=>{
    const navigate = useNavigate();
   const loggearse = async (user)=>{
     let respuesta = await loginService(user);

     if(respuesta){
        navigate("/home")
     }
     
   }

   return {loggearse}
}

export default useAccess;