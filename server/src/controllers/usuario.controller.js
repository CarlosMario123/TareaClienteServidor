const Usuario = require('../models/usuario.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validarToken = require("../auth/validatorToken");//funcion para validar token


const login = async (req, res = response) => {
  const { correo, password } = req.body;

  try {
    // Busca el usuario por correo
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario no encontrado. Verifica tus credenciales.",
      });
    }

    // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "Contraseña incorrecta. Verifica tus credenciales.",
      });
    }

    // Si el inicio de sesión es exitoso, genera un token JWT
    const payload = {
      usuario: {
        id: usuario._id,
      },
    };

    // Clave secreta para firmar el token
    const privateKey = "clave";

    jwt.sign(payload, privateKey, { expiresIn: "1h" }, (error, token) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Error al generar el token JWT",
        });
      }

      // Devuelve el token JWT en la respuesta
      res.json({
        msg: "Inicio de sesión exitoso",
        token,
        usuario: {
          id: usuario.id,
        },
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el inicio de sesión",
    });
  }
};


const registro = async (req,res)=>{
  //extraemos lo de requestes.body
  const {correo,password} = req.body;
  
   try{
      if(!correo || !password){
          return res.status(400).json({error:"hay campos vacios favor de llenarlo"})
       }
      
  
   }catch(error){
      return res.status(400).json({msg: 'Faltan datos'})
   }
  

   try{
   //paso las validaciones ahora si creamos el usuario y lo guardamos en la base de datos  
   //hashear la contraseña
  
   const passHash = await bcrypt.hash(password,10)
   console.log(passHash)
   const user = new Usuario({correo,password :passHash});
  const usuarioGuardado =  await user.save() 

  //Queremos que en el token se guarde su id
  //el segundo parametro es para guardar la llave secreta
  //el tercero cuando expirara
  jwt.sign({id:usuarioGuardado._id},"secret123",{expiresIn:"1d"},(error,token)=>{
      if(error) throw error
      res.cookie("token",token)
      res.send('Usuario Creado')
  })
 
   }catch(error){
      console.log("Error al crear el usuario", error)
      res.status(500).json({error:error.message})
   }
  
 
}


/*

este me puede servir

const validando = (req,res) =>{

  const token = req.header('Authorization')
  console.log(token)

  const valor = validarToken(token)

  console.log(valor);

  return res.send(valor)

}

*/
module.exports ={
    login,
    registro,
}
