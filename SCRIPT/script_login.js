async function iniciarSesion(email, password) {
    const respuesta = await fetch('http://localhost:3000/rinjo/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const datos = await respuesta.json();

    if (respuesta.ok) {
        // AQUÍ ESTÁ EL TRUCO: Guardar en localStorage
        // Usamos setItem para que el token persista
        localStorage.setItem('miTokenJWT', datos.token);
        
        alert('Login exitoso, token guardado');
        window.location.href = 'index.html';
    } else {
        alert('Error: ' + datos.mensaje);
    }

  
}
  async function handleLogin(event) {
  event.preventDefault(); // evita que el form recargue la página

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  await iniciarSesion(email, password);

}