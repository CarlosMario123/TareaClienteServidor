import { Route, Navigate} from 'react-router-dom';

const auth = () => {

  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated;
};

const PrivateRoute = ({ element }) => {
  return auth() ? (
        <>
            {
                element
            }
        </>  
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;


