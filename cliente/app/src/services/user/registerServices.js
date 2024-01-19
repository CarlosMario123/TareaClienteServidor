
export default async function registerUser(user){

 // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a una API
 try {
    const response = await fetch('http://localhost:3000/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      // Manejar el éxito de la solicitud
      console.log('Formulario enviado con éxito');
        
      
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