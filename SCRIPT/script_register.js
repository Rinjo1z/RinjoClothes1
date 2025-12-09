
const API = 'http://localhost:3000/rinjo';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-register');
  const msgEl = document.getElementById('reg-msg');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-pass').value;
    const name = document.getElementById('reg-name')
        ? document.getElementById('reg-name').value: 'Usuario';

    try {
      const res = await fetch(`${API}/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name, email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert('Usuario registrado exitosamente');
        // Redirigir al login
        window.location.href = 'login.html';
      } else {
        msgEl.textContent = data.mensaje;
      }
    } catch (err) {
      msgEl.textContent = 'Error de red: ' + err.message;
    }
  });
});
