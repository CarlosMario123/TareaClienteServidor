import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './page/Register';
import Login from './page/login';
import PrivateRoute from './routesPrivate/PrivateRoute';
import Home from './page/Home';
function App() {


  return (
    <>
    <Router>
  
  <Routes>
    <Route path="/" element={<Register/>} />
    <Route path="/login" element = {<Login/>}/>
     <Route path='/home' element = {<PrivateRoute element={<Home/>}/>}/>

  </Routes>

</Router>
    </>
  )
}

export default App
