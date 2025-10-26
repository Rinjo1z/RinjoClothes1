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
      const categoria = boton.getAttribute('data-category');

      imagenes.forEach(img => {
        if (categoria === 'todos' || img.getAttribute('data-category') === categoria) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    });
  });