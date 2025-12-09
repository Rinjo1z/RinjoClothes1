async function obtenerPerfil() {
    // 1. Recuperamos el token con getItem
    const token = localStorage.getItem('miTokenJWT');

    if (!token) {
        console.log("No hay token guardado, redirigiendo...");
        window.location.href = '/login.html'; // Si no hay token, fuera
        return;
    }

    // 2. Hacemos la petición enviando el header Authorization
    const respuesta = await fetch('http://localhost:3000/rinjo/login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // OJO: Las comillas invertidas y la palabra Bearer
        }
    });

    if (respuesta.status === 401 || respuesta.status === 403) {
        alert('Tu sesión expiró o el token es inválido');
        // Limpiamos el token viejo para evitar problemas
        localStorage.removeItem('miTokenJWT');
        window.location.href = '/login.html';
    } else {
        const datos = await respuesta.json();
        console.log('Datos secretos:', datos);
        // Aquí pintarían los datos en su HTML
    }
}

// Función extra para el botón de Cerrar Sesión
function cerrarSesion() {
    localStorage.removeItem('miTokenJWT');
    window.location.href = '/login.html';
}