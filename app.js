fetch("./menu.json")
  .then(response => response.json())
  .then(menuData => {
    const menuContainer = document.getElementById("menuContainer");

    menuData.carreras.forEach(carrera => {
      const dropdownDiv = document.createElement("div");
      dropdownDiv.className = "dropdown";

      const span = document.createElement("span");
      span.className = "dropdown-text text-white";
      span.setAttribute("data-bs-toggle", "dropdown");
      span.textContent = carrera.nombre;

      const ul = document.createElement("ul");
      ul.className = "dropdown-menu";

      carrera.materias.forEach(materia => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "dropdown-item mouseover";
        a.href = "#";
        a.textContent = materia.nombre;
        li.appendChild(a);
        ul.appendChild(li);
      });

      dropdownDiv.appendChild(span);
      dropdownDiv.appendChild(ul);
      menuContainer.appendChild(dropdownDiv);
    });
  })
  .catch(error => console.error("Error al cargar las opciones", error));
