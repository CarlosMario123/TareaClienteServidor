export default async function loginService(user){

 // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a una API
 try {
    const response = await fetch('http://localhost:3000/usuario/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      // Manejar el éxito de la solicitud
      console.log('logeo exitoso enviado con éxito');
      const data = await response.json();
      localStorage.setItem('token', data.token)
     return true;
      
    } else {
      // Manejar errores de la solicitud
      console.error('Error al enviar el formulario');
      return false;
    }
  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
}