fetch("./menu.json")
  .then(response => response.json())
  .then(data => {
    const deportesContainer = document.getElementById("deportesContainer");

    data.deportes.forEach(deporte => {
      const dropdownDiv = document.createElement("div");
      dropdownDiv.className = "dropdown";

      const span = document.createElement("span");
      span.className = "dropdown-text text-white";
      span.setAttribute("data-bs-toggle", "dropdown");
      span.textContent = deporte.nombre;

      const ul = document.createElement("ul");
      ul.className = "dropdown-menu";

      deporte.noticias.forEach(noticia => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "dropdown-item mouseover";
        a.href = noticia.link;
        a.textContent = noticia.nombre;
        a.target = 'blank';
        li.appendChild(a);
        ul.appendChild(li);
      });

      dropdownDiv.appendChild(span);
      dropdownDiv.appendChild(ul);
      deportesContainer.appendChild(dropdownDiv);
    });
  })
  .catch(error => console.error("Error al cargar el archivo JSON:", error));