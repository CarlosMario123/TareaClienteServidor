async function notificar(){
    const url = 'http://localhost:3000/conectados';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });

}

export default notificar;