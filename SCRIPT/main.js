 const modal = document.getElementById('modalImagen');
  const modalTitle = document.getElementById('modalImagenLabel');
  const modalImg = document.getElementById('modalImagenSrc');
  const modalDesc = document.getElementById('modalImagenDescripcion');

  document.querySelectorAll('[data-bs-target="#modalImagen"]').forEach(img => {
    img.addEventListener('click', () => {
      const titulo = img.getAttribute('data-titulo');
      const descripcion = img.getAttribute('data-descripcion');
      const src = img.getAttribute('src');

      modalTitle.textContent = titulo;
      modalImg.src = src;
      modalImg.alt = titulo;
      modalDesc.textContent = descripcion;
    });
  });

 const botones = document.querySelectorAll('.filter-btn');
const imagenes = document.querySelectorAll('.image-item');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const categoria = boton.getAttribute('data-category').toLowerCase();

    imagenes.forEach(img => {
      const categorias = img.getAttribute('data-category').toLowerCase();

      if (categoria === 'todos' || categorias.includes(categoria)) {
        img.classList.remove('d-none');
      } else {
        img.classList.add('d-none');
      }
    });
  });
});

const form = document.getElementById('formContact');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const mensajeExito = document.getElementById('msg');
  let errores = [];

  if (nombre === '') {
    errores.push('El nombre es obligatorio.');
  }
  if (email === '') {
    errores.push('El correo electrónico es obligatorio.');
  }
  if (mensaje === '') {
    errores.push('El mensaje es obligatorio.');
  }
  if (errores.length > 0) {
    errorMsg.innerHTML = errores.join('<br>');
    errorMsg.classList.remove('d-none');
  } else {
    errorMsg.classList.add('d-none');
    localStorage.setItem('mensajeExito', '¡Mensaje enviado con éxito!');
    form.submit();
    
  }
});

window.addEventListener('load', () => {
  const mensajeGuardado = localStorage.getItem('mensajeExito');
  if (mensajeGuardado) {
    const mensajeExito = document.getElementById('msg');
    mensajeExito.textContent = mensajeGuardado;
    localStorage.removeItem('mensajeExito');
  }
});