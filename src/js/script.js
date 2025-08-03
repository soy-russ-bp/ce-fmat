// permite cargar el logo de manera fluida
const logo = document.querySelector('header img');
  logo.addEventListener('load', () => {
    logo.classList.add('loaded');
  });

// kit.html
  const botones = document.querySelectorAll(".acordeon");
    botones.forEach(btn => {
      btn.addEventListener("click", () => {
        const contenido = btn.nextElementSibling;
        contenido.style.display = (contenido.style.display === "block") ? "none" : "block";
      });
    });

// emprendimientos.html
const content = {
      tech: `
        <div class="tech-card">
          <img src="assets/kiin.png" alt="Logo Kiin" class="tech-logo" height=55px>
          <div>
            <h3>Kiin</h3>
            <p>Desde el Consejo Estudiantil, te damos la bienvenida a este lugar donde todos —sin excepción— venimos a aprender, a equivocarnos y a crecer. A veces lo utilizamos para cargar materias.</p>
          </div>
        </div>
        <div class="tech-card">
          <img src="assets/svim.png" alt="Logo Svim" class="tech-logo">
          <div>
            <h3>Svim</h3>
            <p>Desde el Consejo Estudiantil, te damos la bienvenida a este lugar donde todos —sin excepción— venimos a aprender, a equivocarnos y a crecer. A veces lo utilizamos para cargar materias.</p>
          </div>
        </div>
        <div class="tech-card">
          <img src="assets/inverskit.png" alt="Logo Inverskit" class="tech-logo" height=55px>
          <div>
            <h3>Inverskit</h3>
            <p>Desde el Consejo Estudiantil, te damos la bienvenida a este lugar donde todos —sin excepción— venimos a aprender, a equivocarnos y a crecer. A veces lo utilizamos para cargar materias.</p>
          </div>
        </div>
      `,
      comidas: `
        <div class="tech-card">
          <img src="assets/tacos.png" alt="Tacos" class="tech-logo">
          <div>
            <h3>Tacos UADY</h3>
            <p>Un clásico para sobrevivir el semestre. Ricos, baratos y siempre cerca.</p>
          </div>
        </div>
      `,
      otros: `
        <div class="tech-card">
          <img src="assets/fotocopiadora.png" alt="Fotocopiadora" class="tech-logo">
          <div>
            <h3>Fotocopiadora FMAT</h3>
            <p>Impresiones, anillados y copias para que no te falte nada.</p>
          </div>
        </div>
      `
    };

    const select = document.getElementById('category-select');
    const contentDiv = document.getElementById('category-content');

    function updateContent() {
      const value = select.value;
      contentDiv.innerHTML = content[value];
    }

    select.addEventListener('change', updateContent);
    window.addEventListener('DOMContentLoaded', updateContent);