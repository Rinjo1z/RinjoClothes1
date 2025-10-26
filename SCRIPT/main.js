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